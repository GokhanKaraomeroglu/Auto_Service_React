import React, {useEffect}from 'react'

function Slider() {
	useEffect(() => {
	const slider = document.querySelector('#slider');
	setTimeout(function moveSlide() {
			const max = slider.scrollWidth - slider.clientWidth;
			const left = slider.clientWidth;

			if (max === slider.scrollLeft) {
					slider.scrollTo({left: 0, behavior: 'smooth'})
			} else {
					slider.scrollBy({left, behavior: 'smooth'})
			}

			setTimeout(moveSlide, 4000)
	}, 2000)
}, [])

	return (
		<div className="w-full overflow-hidden flex flex-nowrap text-center" id="slider">
    <div className="bg-[#ABC1C3] text-[#203434] space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <h2 className="p-4 text-4xl max-w-md">Önemli Oto Servisi</h2>
			<img src='https://picsum.photos/id/1071/1200/300' className="w-full object-contain rounded" alt='Önemli Oto Servisi' />
        <p className="p-4 text-xl max-w-md">Kaliteli hizmet, uygun fiyat.</p>
    </div>
    <div className="bg-amber-400 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <h2 className="p-4 text-4xl max-w-md">Önemli Oto Servisi</h2>
		<img src='https://picsum.photos/id/1072/1200/300' className="w-full object-contain rounded" alt='Önemli Oto Servisi' />
        <p className="p-4 text-xl max-w-md">Kaliteli hizmet, uygun fiyat.</p>
    </div>
    <div className="bg-teal-500 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <h2 className="p-4 text-4xl max-w-md">Önemli Oto Servisi</h2>
		<img src='https://picsum.photos/id/1070/1200/300' className="w-full object-contain rounded" alt='Önemli Oto Servisi' />
        <p className="p-4 text-xl max-w-md">Kaliteli hizmet, uygun fiyat.</p>
    </div>
</div>
	)
}

export default Slider