import React, { useState } from "react";
import logo from "./img/products/logo.svg";
import logo1 from "./img/products/image_conn.webp";
import logo3 from "./img/Antananarivo.jpg";
import { motion } from "framer-motion";
import 'boxicons/css/boxicons.min.css';
import { Link } from "react-router-dom";
import GoogleMap from "./Map";
import Navi from "./navi";

export default function Principale() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>


            <div class="container" >
                <div class="row" style={{ alignItems: "center", borderStyle: "none" }}>
                    <div class="col-xl-3" style={{ width: "400px", alignItems: 'flex-end', justifyContent: 'center', display: 'flex', background: '#D9D9D9', width: '100px', margin: '20px', borderRadius: '20px', backdropFilter: 'blur(63px)' }}>
                        <div></div>
                    </div>
                    <div class="col">
                        <div className="row" style={{ marginTop: '30px', marginBottom: '20px' }}>
                            <div className="col-xl-3" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', background: '#11A5FF', padding: '5px', borderRadius: '20px', margin: '5px', marginRight: '5px', marginLeft: '5px', height: '220px' }}>
                                <div></div>
                                <motion.div className="row">
                                    <div className="col-xl-12" style={{ alignItems: 'center', justifyContent: 'center', display: 'grid' }}>
                                        <div className="row">
                                            <motion.div className="col">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-cloud-moon-fill" style={{ fontSize: '126px', color: 'rgb(255,255,255)' }}>
                                                    <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z"></path>
                                                    <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.46 5.46 0 0 1 1.055.209A3.603 3.603 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.576 3.576 0 0 1-2.241.634c.162.317.295.652.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z"></path>
                                                </svg>
                                            </motion.div>
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
                                </motion.div>
                            </div>

                            <div className="col" style={{ marginRight: '5px', marginLeft: '5px', borderStyle: 'none', boxShadow: '6px 6px #D0D0D0', borderRadius: '20px', padding: '5px', height: '220px' }}>
                                <div className="row">
                                    <div className="col" style={{ borderRadius: '15px' }}>
                                        <p style={{ textAlign: 'center', fontSize: '25px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', marginTop: '10px' }}>Vitesse du vent 40m/s</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <motion.div whileHover={{ scale: [null, 1.5, 1.4] }}
                                        transition={{ duration: 0.3 }} className="col" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: "pointer" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-wind" style={{ fontSize: '150px' }}>
                                            <motion.path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"></motion.path>
                                        </svg>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="col-xl-3" style={{ margin: '5px', display: 'flex', alignItems: 'center', padding: '5px', justifyContent: 'center', borderStyle: 'none', borderRadius: '20px', boxShadow: '6px 6px #D0D0D0', width: "350px" }}>
                                <div hidden>

                                    <GoogleMap
                                        initialLongitude={10}
                                        initialLatitude={10}
                                    />

                                </div>
                                <GoogleMap
                                    initialLongitude={10}
                                    initialLatitude={10}
                                />
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
                                    <motion.div className="row" whileHover={{ scale: [null, 1.5, 1.4] }}
                                        transition={{ duration: 0.3 }}>
                                        <div className="col"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-left-circle" style={{ fontSize: '54px', borderColor: 'var(--bs-body-bg)', color: 'var(--bs-body-bg)' }}>
                                            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"></path>
                                        </svg></a></div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col" style={{ marginTop: '5px' }}>
                                <div style={{ height: '180px', marginLeft: '5px', boxShadow: '6px 6px #D0D0D0', borderRadius: '25px', marginBottom: '30px', borderStyle: 'solid', borderColor: '#D0D0D0' }}>
                                    <img style={{ width: '100%', height: '100%', objectFit: 'cover', padding: '5px', borderRadius: "15px" }} src={logo3} alt="Blob" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

