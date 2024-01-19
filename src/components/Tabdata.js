import React from 'react'

const Tabdata = ({ TabDes, scrollToTop, TabImg }) => {
    return (
        <>
            <div className="row py-5 gap-5 justify-content-center align-items-center">
                <div class="col-md-4 d-lg-block d-none">
                    <div class="service-tab-img">
                        <img src={TabImg} class="img-fluid" />
                    </div>
                </div>
                <div className="col-md-5">
                    <p className='fs_16 fw_500 text-white'>{TabDes}</p>
                    <div className="text-lg-start text-center">
                        <button onClick={scrollToTop} className='btn bg__orange border-0 d-inline text__black rounded-pill fs_18 fw_600'>START PROJECT</button>
                    </div>
                </div>
            </div>
            <p className='fs_16 fw_500 text-white text-center'>Let Amazon Publisher Pros be your partner on your journey to becoming a published author.
            </p>
        </>
    )
}

export default Tabdata
