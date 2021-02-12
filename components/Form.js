import swal from 'sweetalert';

export default function Form() {
	const onSubmit = async (event) => {
		event.preventDefault();
		const { email, topic, description } = event.target;
		const data = {
			email: email.value,
			subject: topic.value,
			description: description.value,
		};
		const response = await fetch(
			'https://hfmd.medu.app/api/support/request',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				mode: 'cors',
				body: JSON.stringify(data),
			}
		);

		if (response.ok) {
			swal('สำเร็จ!', 'เราได้บันทึกข้อมูลของคุณไว้แล้ว', 'success');
			email.value = '';
			topic.value = '';
			description.value = '';
		} else {
			swal('พบข้อผิดพลาด!', 'กรุณาลองอีกครั้งในภายหลัง', 'error');
		}
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-md w-full space-y-8'>
				<div>
					<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
						กรุณากรอกรายละเอียดของปัญหาที่เกิดขึ้น
					</h2>
				</div>
				<form className='mt-8 space-y-6' onSubmit={onSubmit}>
					<input type='hidden' name='remember' value='true' />
					<div className='rounded-md shadow-sm -space-y-px'>
						<div>
							<div className='col-span-6 sm:col-span-3'>
								<div className='col-span-6 sm:col-span-4'>
									<label
										htmlFor='email'
										className='block text-sm font-medium text-gray-700'
									>
										อีเมล
									</label>
									<input
										type='text'
										name='email'
										id='email'
										autoComplete='email'
										required
										className='my-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
										placeholder='example@example.com'
									/>
								</div>
								<label
									htmlFor='topic'
									className='block text-sm font-medium text-gray-700'
								>
									หัวข้อ
								</label>
								<input
									type='text'
									name='topic'
									id='topic'
									autoComplete='given-name'
									required
									className='my-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
									placeholder='ปัญหาที่พบ เช่น ไม่สามารถเข้าสู่ระบบได้'
								/>
							</div>
							<label
								htmlFor='description'
								className='block text-sm font-medium text-gray-700'
							>
								รายละเอียด
							</label>
							<div className='my-1'>
								<textarea
									id='description'
									name='description'
									rows='3'
									required
									className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md'
									placeholder='รายละเอียดของปัญหาที่เกิดขึ้น...'
								></textarea>
							</div>
						</div>
					</div>

					<div>
						<button
							type='submit'
							className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						>
							ส่งข้อมูล
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
