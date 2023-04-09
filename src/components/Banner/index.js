/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import bannerPic1 from "../Assets/img/banner1.jpg";
import bannerPic2 from "../Assets/img/banner2.jpg";
import bannerPic3 from "../Assets/img/banner3.jpg";
import bannerPic4 from "../Assets/img/banner4.jpg";

function Banner() {
    return ( 
        <div className="banner"> 
            <div class="container-fluid p-0">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={bannerPic1} class="d-block w-100 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={bannerPic2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={bannerPic3} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={bannerPic4} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            <div class="container mt-5">
                <div class="row">
                <div class="col">
                    <img src="https://www.pasls.com/blog/wp-content/uploads/2020/10/5f88181b08461-1024x682.jpg" class="img-thumbnail" alt="..." />
                </div>
                <div class="col order-5">
                    <img src="https://www.pasls.com/blog/wp-content/uploads/2020/10/5f88181b08461-1024x682.jpg" class="img-thumbnail" alt="..." />
                </div>
                <div class="col order-1">
                    <img src="https://www.pasls.com/blog/wp-content/uploads/2020/10/5f88181b08461-1024x682.jpg" class="img-thumbnail" alt="..." />
                </div>
                </div>
            </div>
        </div>
     );
}

export default Banner;