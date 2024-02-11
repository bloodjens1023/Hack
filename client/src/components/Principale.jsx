import React from "react";
import logo from "./img/products/logo.svg";
import logo1 from "./img/products/image_conn.webp";
import logo3 from "./img/Antananarivo.jpg";
export default function Principale() {
    return (
        <>
            <div class="bg-body shadow d-flex flex-column flex-shrink-0 position-fixed top-0 bottom-0 navig" >
                <a class="text-center link-body-emphasis d-block p-3 text-decoration-none border-bottom" href="/" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                    <img width="43" height="33" src={logo} />
                    <span class="visually-hidden">Icon-only</span>
                </a>
                <ul class="nav nav-pills flex-column text-center nav-flush mb-auto">
                    <li class="nav-item">
                        <a class="nav-link active link-light py-3 border-bottom rounded-0 nav1" href="#" aria-current="page" ><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-house-door">
                            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"></path>
                        </svg></a></li>
                    <li class="nav-item">
                        <a class="nav-link py-3 border-bottom rounded-0 nav1" href="#" ><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-cloud-snow-fill">
                            <path d="M2.625 11.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm2.75 2a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm5.5 0a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 0 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm-2.75-2a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm5.5 0a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 0 1-.5 0v-.57l-.501.287a.25.25 0 1 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm-.22-7.223a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10.25H13a3 3 0 0 0 .405-5.973"></path>
                        </svg></a></li>
                    <li class="nav-item">
                        <a class="nav-link py-3 border-bottom rounded-0 nav1" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-clipboard2-data" >
                            <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z"></path>
                            <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"></path>
                            <path d="M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1"></path>
                        </svg></a></li>
                    <li class="nav-item">
                        <a class="nav-link py-3 border-bottom rounded-0 nav1" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-bell-fill nav1" >
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"></path>
                        </svg></a></li>
                    <li class="nav-item">
                        <a class="nav-link py-3 border-bottom rounded-0" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-chat-square-dots-fill" >
                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path>
                        </svg></a></li>
                </ul>
                <div class="dropdown p-3 border-top">
                    <a class="dropdown-toggle link-body-emphasis d-flex align-items-center text-decoration-none" aria-expanded="false" data-bs-toggle="dropdown" role="button"><img class="rounded-circle" alt="" width="30" height="32" src={logo1} /></a>
                    <div class="dropdown-menu shadow text-small" data-popper-placement="top-start"><a class="dropdown-item" href="#">New project...</a><a class="dropdown-item" href="#">Settings</a><a class="dropdown-item" href="#">Profile</a>
                        <div class="dropdown-divider"></div><a class="dropdown-item" href="#">Sign out</a>
                    </div>
                </div>
            </div>




            <div class="container" style={{ marginLeft: "10px" }}>
                <div class="row" style={{ alignItems: "center", borderStyle: "none" }}>
                    <div class="col-xl-2" style={{ width: '100vh', alignItems: 'flex-end', justifyContent: 'center', display: 'flex', background: '#D9D9D9', width: '100px', margin: '20px', borderRadius: '20px', backdropFilter: 'blur(63px)' }}>
                        <div></div>
                    </div>
                    <div class="col">
                        <div className="row" style={{ marginTop: '30px', marginBottom: '20px' }}>
                            <div className="col-xl-3" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', background: '#11A5FF', padding: '5px', borderRadius: '20px', margin: '5px', marginRight: '5px', marginLeft: '5px', height: '220px' }}>
                                <div></div>
                                <div className="row">
                                    <div className="col-xl-12" style={{ alignItems: 'center', justifyContent: 'center', display: 'grid' }}>
                                        <div className="row">
                                            <div className="col">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-cloud-moon-fill" style={{ fontSize: '126px', color: 'rgb(255,255,255)' }}>
                                                    <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z"></path>
                                                    <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.46 5.46 0 0 1 1.055.209A3.603 3.603 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.576 3.576 0 0 1-2.241.634c.162.317.295.652.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z"></path>
                                                </svg>
                                            </div>
                                            <div className="col" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <p style={{ fontSize: '50px', fontFamily: 'Montserrat, sans-serif', color: 'rgb(255,255,255)', fontWeight: 'bold' }}>25°</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <p className="text-center" style={{ fontSize: '25px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', color: 'rgb(255,255,255)' }}>Nuageux Antananarivo</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col" style={{ marginRight: '5px', marginLeft: '5px', borderStyle: 'none', boxShadow: '6px 6px #D0D0D0', borderRadius: '20px', padding: '5px', height: '220px' }}>
                                <div className="row">
                                    <div className="col" style={{ borderRadius: '15px' }}>
                                        <p style={{ textAlign: 'center', fontSize: '25px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', marginTop: '10px' }}>Vitesse du vent 40m/s</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-wind" style={{ fontSize: '150px' }}>
                                            <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3" style={{ margin: '5px', marginLeft: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5px', justifyContent: 'center', borderStyle: 'none', borderRadius: '20px', boxShadow: '6px 6px #D0D0D0', marginRight: '30px', height: '220px' }}>
                                <div className="row">
                                    <div className="col">
                                        <p style={{ textAlign: 'center', fontSize: '30px' }}>Votre localisation</p>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-globe-americas" style={{ fontSize: '128px', borderColor: 'rgb(17,165,255)', color: 'rgb(17,165,255)' }}>
                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"></path>
                                </svg>
                            </div>

                        </div>

                        <div class="row">

                            <div className="col" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '10px', padding: '10px', boxShadow: '6px 6px #D0D0D0', borderRadius: '20px', height: '220px', width: "100px" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-pie-chart-fill" style={{ fontSize: '500px', color: '#11A5FF' }}>
                                    <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z"></path>
                                </svg>

                            </div>

                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <div style={{ height: '80px', marginLeft: '5px', transformStyle: 'preserve-3d', boxShadow: '6px 6px #D0D0D0', borderRadius: '25px', marginBottom: '10px' }}></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div style={{ height: '80px', marginLeft: '5px', transformStyle: 'preserve-3d', boxShadow: '6px 6px #D0D0D0', borderRadius: '25px' }}></div>
                                    </div>
                                </div>
                            </div>




                            <div className="col">
                                <div style={{ marginLeft: '5px', transformStyle: 'preserve-3d', borderRadius: '25px', height: '230px', width: '370px', background: '#FFBC10', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <div className="row">
                                        <div className="col">
                                            <p style={{ textAlign: 'center', fontSize: '33px', fontFamily: 'Inter, sans-serif', fontWeight: 'bold', marginTop: '30px' }}>Voir Les Zones a risque</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-left-circle" style={{ fontSize: '54px', borderColor: 'var(--bs-body-bg)', color: 'var(--bs-body-bg)' }}>
                                            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"></path>
                                        </svg></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col" style={{ marginTop: '5px' }}>
                                <div style={{ height: '180px', marginLeft: '5px', boxShadow: '6px 6px #D0D0D0', borderRadius: '25px', marginBottom: '30px', borderStyle: 'solid', borderColor: '#D0D0D0' }}>
                                    <img style={{ width: '100%', height: '100%', objectFit: 'cover', padding: '5px' }} src={logo3} alt="Blob" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

