import React from 'react'


function Homepage () {
	return (
	<div>
		
		<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-indicators">
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
			</div>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src="https://picsum.photos/id/1071/1200/300" className="d-block w-100" alt="..."/>
				</div>
				<div className="carousel-item">
					<img src="https://picsum.photos/id/1072/1200/300" className="d-block w-100" alt="..."/>
				</div>
				<div className="carousel-item">
					<img src="https://picsum.photos/id/1070/1200/300" className="d-block w-100" alt="..."/>
				</div>
			</div>
			<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	
		<div className="container"> 			
	
		<div className="row mt-5">	
		
			<div className="col-sm-6">		
				<img src="https://picsum.photos/id/1072/600/400" className="w-100 img-thumbnail" alt="..."/>
			</div>
			<div className="col-sm-6">
				<h2 className="text-center text-danger" >Hakkımızda</h2>
				<p>Rahmetli babamız <strong>Ünal Önemli</strong>'nin bize bıraktığı değerleri koruyup geliştirerek bu günlere gelen <strong>Önemli Oto Servisi</strong>'nin temel düşüncesi tüm müşterilerine en kaliteli hizmeti en uygun fiyatla sunmaktır. </p>
				<p> <strong>Önemli Oto Servisi</strong>'nin miras aldığı en büyük değer müşteri memnuniyetidir. Araçlarınızın onarımında yüksek kaliteli yedek parçalar ve en hassas ellerden çıkan işcilik kullanılmaktaır.</p>
			</div> 										
		</div> 		
			
											
<div className="row mt-3">
<h2 className="pb-2 border-bottom text-secondary">Hizmetlerimiz</h2>
<div className="col-sm-4 mt-3">
	<div className="card" style={{width: 18+'rem'}}>
		<img src="https://picsum.photos/id/183/400/300"  className="card-img-top" alt="..."/>
		<div className="card-body">
			<h5 className="card-title">Peryodik Bakım</h5>
			<p className="card-text">Tüm peryodik bakımlarınızı yapıyoruz.</p>
			<a href="#" className="btn btn-primary">İncele</a>
		</div>
	</div>
</div>

<div className="col-sm-4 mt-3">
	<div className="card" style={{width: 18+'rem'}}>
		<img src="https://picsum.photos/id/133/400/300"  className="card-img-top" alt="..."/>
		<div className="card-body">
			<h5 className="card-title">Onarım</h5>
			<p className="card-text">Tüm onarım faaliyetlerinizi yapıyoruz.</p>
			<a href="#" className="btn btn-primary">İncele</a>
		</div>
	</div>
</div>

<div className="col-sm-4 mt-3">
	<div className="card" style={{width: 18+'rem'}}>
		<img src="https://picsum.photos/id/1072/400/300"  className="card-img-top" alt="..."/>
		<div className="card-body">
			<h5 className="card-title">Kaza Sonrası</h5>
			<p className="card-text">Kaza sonrsı aracınız emin ellerde... </p>
			<a href="#" className="btn btn-primary">İncele</a>
		</div>
	</div>
</div>

</div>

<div className="b-example-divider"></div>

  <div className="b-example-divider"></div>

		<div className="row mt-5">
			<div className="col-sm-12 h4">Resimler</div>
			<div className="col-sm">
				<img src="https://picsum.photos/id/1072/400/300" alt="" className="w-100 img-thumbnail"/>
			</div>
			<div className="col-sm">
				<img src="https://picsum.photos/id/514/400/300" alt="" className="w-100 img-thumbnail"/>
			</div>
			<div className="col-sm">
				<img src="https://picsum.photos/id/605/400/300" alt="" className="w-100 img-thumbnail"/>
			</div>
			<div className="col-sm">
				<img src="https://picsum.photos/id/133/400/300" alt="" className="w-100 img-thumbnail"/>
			</div>
			<div className="col-sm">
				<img src="https://picsum.photos/id/111/400/300" alt="" className="w-100 img-thumbnail"/>
			</div>
	</div>
	</div> 
	</div> 
	
	)
}

export default Homepage


{/* <div className="container px-4 py-5" id="custom-cards">
<h2 className="pb-2 border-bottom text-secondary">Bölümler</h2>

<div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
	<div className="col" href="./Motor.html" >
		<div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url('https://www.mapfre.com.tr/blog/wp-content/uploads/2019/07/oto-servisi-bulmak-icin-oneriler.jpg');">
			<div className="d-flex flex-column h-100 p-3 pb-3 text-white text-shadow-1">
				<h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-dark">Motor ve Teknik Aksam</h2>
				<ul className="d-flex list-unstyled mt-auto">
					<li className="me-auto">
						<img src="https://www.mapfre.com.tr/blog/wp-content/uploads/2019/07/oto-servisi-bulmak-icin-oneriler.jpg" alt="Motor Tamiri" style={{width:32+'px',  height:32+'px'}} className="rounded-circle border border-white"/>
					</li>
					<li className="d-flex align-items-center me-3">
						<svg className="bi me-2" style={{width:1+"em", height:1+"em"}}><use href="#geo-fill"/></svg>
						<small>Önemli Oto Servisi</small>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div className="col" href="./Motor.html">
		<div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url('https://www.gucluopelservisi.com/uploads/Large/elektrik-servisi-GAxLAzFS88rb.jpg');">
			<div className="d-flex flex-column h-100 p-3 pb-3 text-white text-shadow-1">
				<h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Oto Elektrik</h2>
				<ul className="d-flex list-unstyled mt-auto">
					<li className="me-auto">
						<img src="https://www.gucluopelservisi.com/uploads/Large/elektrik-servisi-GAxLAzFS88rb.jpg" alt="Oto Elektrik" style={{width:32+'px',  height:32+'px'}} className="rounded-circle border border-white"/>
					</li>
					<li className="d-flex align-items-center me-3">
						<svg className="bi me-2" style={{width:1+"em", height:1+"em"}}><use href="#geo-fill"/></svg>
						<small>Önemli Oto Servisi</small>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div className="col" href="./Motor.html">
		<div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url('http://uludagcar.com/wp-content/uploads/2015/08/kaporta-boya-servisi-uludağ-car-araç-servisi-ankara-2.jpg'); ">
			<div className="d-flex flex-column h-100 p-3 pb-3 text-shadow-1">
				<h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-dark">Kaporta Boya</h2>
				<ul className="d-flex list-unstyled mt-auto">
					<li className="me-auto">
						<img src="http://uludagcar.com/wp-content/uploads/2015/08/kaporta-boya-servisi-uludağ-car-araç-servisi-ankara-2.jpg" alt="Bootstrap" style={{width: 32+'px', height: 32+'px'}} className="rounded-circle border border-white"/>
					</li>
					<li className="d-flex align-items-center me-3">
						<svg className="bi me-2" style={{width: 1+"em", height: 1+"em"}}><use href="#geo-fill"/></svg>
						<small>Önemli Oto Servisi</small>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
</div> */}
