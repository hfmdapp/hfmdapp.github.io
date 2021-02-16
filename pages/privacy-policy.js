import BodyWrapper from '../components/BodyWrapper';
import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function PrivacyPolicy() {
	return (
		<>
			<Navbar />
			<div>
				<Head>
					<title>HFMD Privacy Policy</title>
					<link rel='icon' href='/favicon.ico' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Prompt&display=swap'
						rel='stylesheet'
					></link>
				</Head>

				<main>
					<div className='flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
						<div className='max-w-3xl w-full space-y-8'>
							<h1 class='text-xl font-bold'>นโยบายความเป็นส่วนตัว</h1>
							<p class='font-serif'>
								"HFMD" (ต่อจากนี้จะแทนว่า "แอป" หรือ "แอปพลิเคชั่น")
								เป็นแอปพลิเคชั่นที่พัฒนาเพื่อช่วยเหลือการวินิจฉัยและการรายงานการติดเชื้อโรคมือเท้าปาก
							</p>
							<p class='font-serif'>
								แอปพลิเคชั่นนี้มีจุดประสงค์ในการใช้งานเฉพาะกลุ่ม
								การใช้งานแอปพลิเคชั่นนี้จะถูกจำกัดให้เข้าใช้ได้เฉพาะผู้ที่เข้าร่วมงานวิจัย
								(ต่อจากนี้จะแทนว่า "ผู้เข้าร่วมวิจัย" หรือ "ท่าน")
								และได้ยอมรับข้อตกลงการใช้ข้อมูลในงานวิจัยแล้วเท่านั้น
							</p>
							<p class='font-serif'>
								เอกสารนโยบายความเป็นส่วนตัวนี้
								จะอธิบายถึงการเก็บข้อมูลในระบบเทคโนโลยีสารสนเทศ
								การใช้ข้อมูลในระบบเทคโนโลยีสารสนเทศ และ
								การแบ่งปันข้อมูลของผู้เข้าร่วมวิจัยกับผู้พัฒนาแอปพลิเคชั่น
								(ต่อจากนี้จะแทนว่า "ผู้พัฒนา" หรือ "พวกเรา")
							</p>
							<h3 class='text-lg font-bold'>เราเก็บข้อมูลอย่างไรและอะไรบ้าง</h3>
							<p class='font-serif'>
								ข้อมูลของผู้เข้าร่วมวิจัยจะถูกเก็บอยู่ในฐานข้อมูลออนไลน์ที่มีการปกป้องการเข้าถึงข้อมูลจากผู้ใช้งานอินเตอร์เน็ตทั่วไป
								โดยทางผู้พัฒนาจะเก็บข้อมูลของผู้เข้าร่วมวิจัยตามที่ท่านได้ให้ข้อมูลไว้แก่ทีมวิจัย
								โดยข้อมูลดังกล่าวจะมีดังนี้:
							</p>
							<ul>
								<li class='font-serif list-disc leading-7	'>
									รหัสประจำตัวของท่านเพื่อใช้ในระบบภายใน (รหัสประจำตัวนี้
									ไม่สามารถเชื่อมโยงไปยังเลขประจำตัวประชาชนของท่านได้)
								</li>
								<li class='font-serif list-disc leading-7	'>
									ชื่อ-นามสกุลของท่าน
								</li>
								<li class='font-serif list-disc leading-7	'>เบอร์โทรศัพท์</li>
								<li class='font-serif list-disc leading-7	'>ที่อยู่</li>
								<li class='font-serif list-disc leading-7	'>
									ในกรณีที่ท่านประกอบอาชีพเป็นครูพี่เลี้ยงเด็ก
									จะมีการเก็บชื่อโรงเรียนหรือศูนย์เด็กเล็กที่ท่านดูแลอยู่
								</li>
								<li class='font-serif list-disc leading-7	'>
									ชื่อ-นามสกุลและชื่อเล่นของเด็กในการดูแลหรือบุตรของท่าน
								</li>
								<li class='font-serif list-disc leading-7	'>
									วันเกิดของเด็กในการดูแลหรือบุตรของท่าน
								</li>
								<li class='font-serif list-disc leading-7	'>
									วันเกิดของเด็กในการดูแลหรือบุตรของท่าน
									<ul class='pl-5'>
										<li class='font-serif list-disc leading-7	'>
											น้ำหนัก ส่วนสูง และ อัตราการเต้นของหัวใจ ณ เวลาที่รายงาน
										</li>
										<li class='font-serif list-disc leading-7	'>
											อาการที่เกิดขึ้น ณ เวลาที่รายงาน
										</li>
										<li class='font-serif list-disc leading-7	'>
											รูปภาพประกอบอาการที่เกิดขึ้น
										</li>
										<li class='font-serif list-disc leading-7	'>
											ในกรณีที่มีการพบแพทย์และได้รายงาน จะมีข้อมูลที่เก็บเพิ่ม
											ดังนี้:
											<ul class='pl-5'>
												<li class='font-serif list-disc leading-7	'>
													โรคที่แพทย์ได้วินิจฉัย
												</li>
												<li class='font-serif list-disc leading-7	'>
													วันที่และสถานที่ที่ได้พบแพทย์
												</li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>
							<p class='font-serif'>
								ข้อมูลข้างต้นที่เกี่ยวข้องกับตัวท่านโดยตรง
								จะเป็นข้อมูลที่ท่านได้ให้ไว้กับทีมวิจัยในก่อนหน้าที่ท่านจะได้ใช้งานแอปพลิเคชั่น
							</p>
							<h3 class='text-lg font-bold'>เราใช้ข้อมูลของท่านอย่างไร</h3>
							<p class='font-serif'>
								ข้อมูลที่ถูกเก็บมา อาทิ เช่น ข้อมูลรายงาน อาการของโรคที่เกิดขึ้น
								รูปภาพประกอบอาการ จะถูกนำไปใช้ในงานวิจัย
								โดยที่ข้อมูลของท่านจะถูกนำข้อมูลที่ระบุตัวตนออกก่อนที่จะนำไปใช้ในการวิจัย
							</p>
							<h3 class='text-lg font-bold'>
								เราแบ่งปันข้อมูลของคุณให้ใครบ้าง
							</h3>
							<p class='font-serif'>
								แอปพลิเคชั่น HFMD
								จะแบ่งปันข้อมูลบางส่วนเพื่อให้การทำงานเป็นไปได้ด้วยความราบรื่น
							</p>
							<p class='font-serif'>
								ในกรณีที่ท่านใช้งานแอปพลิเคชั่น HFMD ผ่านระบบปฏิบัติการณ์
								Android เราแบ่งปันข้อมูลพื้นฐานของคุณ เช่น อีเมล และ
								ชื่อ-นามสกุล ของบัญชีผู้ใช้ที่ใช้ในการสมัคร Google Account
								(ซึ่งเป็นบริการของ{' '}
								<a href='https://policies.google.com/privacy?hl=th-th'>
									Google
								</a>
								) แก่ Google
								เพื่อการวิเคราะห์ผู้ใช้และติดตามการติดตั้งของแอปพลิเคชั่น HFMD
							</p>
							<p class='font-serif'>
								ในกรณีที่ท่านใช้งานแอปพลิเคชั่น HFMD ผ่านระบบปฏิบัติการณ์ iOS
								หรือ iPadOS เราแบ่งปันข้อมูลพื้นฐานของคุณ เช่น อีเมล และ
								ชื่อ-นามสกุล ของบัญชีผู้ใช้ที่ใช้ในการสมัคร Apple ID
								(ซึ่งเป็นบริการของ{' '}
								<a href='https://www.apple.com/legal/privacy/th/'>Apple</a>) แก่
								Apple เพื่อการวิเคราะห์ผู้ใช้และติดตามการติดตั้งของแอปพลิเคชั่น
								HFMD
							</p>
							<hr />
							<p class='font-serif'>
								หากมีข้อสงสัย ท่านสามารถติดต่อทีมงานวิจัยได้โดยตรง หรือ
								ทีมงานพัฒนาได้ผ่าน อีเมล app.hfmd@gmail.com
							</p>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}
