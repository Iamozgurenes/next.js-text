import React from 'react'

const Card = () => {
  return (
    <>

<section>
  <div className="container">
   
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 p-5 gap-y-10 lg:gap-y-0 gap-16 2xl:gap-24 lg:gap-2 xl:gap-16">
 
    <div className=" lg::w-1/5  lg:-mt-14 z-10 lg:hover:-mt-20 duration-300">  
      <h1 className="rounded-t-lg p-3 text-black bg-white font-bold text-3xl border border-solid"> <i className="fa-solid fa-house-laptop text-gaga-yesil me-2"></i>  OFİS</h1>
      <div className="rounded-b-lg p-4 bg-green-100">
        <h3 className="font-semibold text-xl h-14">ÖN MUHASEBE</h3>
        <p className="text-start text-lg font-open line-clamp-4 h-40">Cari takibi, gelir-gider, stok takibi, e-fatura ve e-ticaret entegrasyonları ve onlarca finansal çözüm Papirus Ofis'te</p>
        <div>
        <a href="" className="py-2 px-4 rounded-full bg-white text-gaga-mavi font-sans hover:bg-gaga-mavi hover:text-white">Detaylı Bilgi</a>
        <div className="flex justify-between mt-6">
          <i className="fa-solid fa-desktop text-gray-400"></i> 
          <div className="p-2 rounded-full bg-green-400"></div>
        </div>
      </div>
      </div>
    </div>

 
    <div className=" lg::w-1/5 lg:-mt-14 z-10 lg:hover:-mt-20 duration-300"> 
      <h1 className="rounded-t-lg p-3 text-black bg-white font-bold text-3xl border border-solid"> <i className="fa-solid fa-rocket text-gaga-mavi me-2"></i>  E FATURA</h1>
      <div className="rounded-b-lg p-4 bg-blue-100">
        <h3 className="font-semibold text-xl h-14">JET HIZINDA E-FATURA</h3>
        <p className="text-start text-lg font-open line-clamp-4 h-40">Sadece fatura kesmek isteyenlere özel geliştirilen Papirus' Jet ile e-fatura süreçlerinizde hız kazanın!</p>
        <div>
        <a href="" className="py-2 px-4 rounded-full bg-white text-gaga-mavi font-sans hover:bg-gaga-mavi hover:text-white">Detaylı Bilgi</a>
        <div className="flex justify-between mt-6">
          <i className="fa-solid fa-desktop text-gray-400"></i>
          <div className="p-2 rounded-full bg-blue-400"></div>
        </div>
      </div>
      </div>
    </div>

    <div className=" lg::w-1/5 lg:-mt-14 z-10 lg:hover:-mt-20 duration-300"> 
      <h1 className="rounded-t-lg p-3 text-black bg-white font-bold text-3xl border border-solid"> <i className="fa-solid fa-link text-orange-600 me-2"></i>  DEMO SÜRÜM</h1>
      <div className="rounded-b-lg p-4 bg-orange-100">
        <h3 className="font-semibold text-xl h-14">30 GÜN</h3>
        <p className="text-start text-lg font-open line-clamp-4 h-40">Şimdi Papirus’ Ön Muhasebe Programını kullanmaya başlayın ve ücretsiz e-fatura kontörü fırsatından yararlanın!</p>
        <div>
        <a href="" className="py-2 px-4 rounded-full bg-white text-gaga-mavi font-sans hover:bg-gaga-mavi hover:text-white">Detaylı Bilgi</a>
        <div className="flex justify-between mt-6">
          <i className="fa-solid fa-desktop text-gray-400"></i>
          <div className="p-2 rounded-full bg-orange-400"></div>
        </div>
      </div>
      </div>
    </div>

    <div className=" lg::w-1/5 lg:-mt-14 z-10 lg:hover:-mt-20 duration-300"> 
      <h1 className="rounded-t-lg p-3 text-black bg-white font-bold text-3xl border border-solid"> <i className="fa-solid fa-building-columns text-yellow-500 me-2"></i>  BANKA</h1>
      <div className="rounded-b-lg p-4 bg-yellow-100">
        <h3 className="font-semibold text-xl h-14">25+ BANKA</h3>
        <p className="text-start text-lg font-open line-clamp-4 h-40">Tüm banka hesaplarınızı tek ekrandan yönetin, nakit akışınızı anlık takip edin!</p> 
        <div>
        <a href="" className="py-2 px-4 rounded-full bg-white text-gaga-mavi font-sans hover:bg-gaga-mavi hover:text-white">Detaylı Bilgi</a>
        <div className="flex justify-between mt-6">
          <i className="fa-solid fa-desktop text-gray-400"></i>
          <div className="p-2 rounded-full bg-orange-400"></div>
        </div>
        
      </div>
      </div>
    </div>



 
  </div>
  </div>
</section> 

    </>
  )
}

export default Card