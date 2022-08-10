import React,{Fragment,useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import { Dropdown } from "react-bootstrap";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import { ThemeContext } from "../../../context/ThemeContext";


import Donut from "../zenix/MyWallets/Donut";
import SwiperSlider2 from "../zenix/MyWallets/SwiperSlider2";


const CoinChart = loadable(() =>
  pMinDelay(import("../zenix/MyWallets/CoinChart"), 1000)
);

const Wallet = () => {
	const { background } = useContext(ThemeContext);
	const [crrency1, setCrrency1] = useState("Monthly (2021)");
	return(
		<Fragment>
			<div className="form-head mb-sm-5 mb-3 d-flex align-items-center flex-wrap">
				<h2 className="font-w600 mb-0 mr-auto mb-2 text-black">My Wallet</h2>
				<Link to={"#"} className="btn btn-secondary mb-2">+ Add Balance</Link>
			</div>
			<div className="row">
				<div className="col-xl-3 col-xxl-4">
					<div className="swiper-box">
						<SwiperSlider2 />
					</div>
				</div>
				<div className="col-xl-9 col-xxl-8">
					<div className="row">
						<div className="col-xl-12">
							<div className="d-block d-sm-flex mb-4">
								<h4 className="mb-0 text-black fs-20 mr-auto">Card Details</h4>
							</div>
						</div>	
						<div className="col-xl-12">
							<div className="card">
								<div className="card-body">
									<div className="row align-items-end">
										<div className="col-xl-6 col-lg-12 col-xxl-12">
											<div className="row">
												<div className="col-sm-6">
													<div className="mb-4">
														<p className="mb-2">Card Name</p>
														<h4 className="text-black">Main Balance</h4>
													</div>
													<div className="mb-4">
														<p className="mb-2">Valid Date</p>
														<h4 className="text-black">08/21</h4>
													</div>
													<div>
														<p className="mb-2">Card Number</p>
														<h4 className="text-black">**** **** **** 1234</h4>
													</div>
												</div>
												<div className="col-sm-6">
													<div className="mb-4">
														<p className="mb-2">Bank Name</p>
														<h4 className="text-black">ABC Center Bank</h4>
													</div>
													<div className="mb-4">
														<p className="mb-2">Card Holder</p>
														<h4 className="text-black">Marquezz Silalahi</h4>
													</div>
												</div>
											</div>
										</div>
										<div className="col-xl-6 col-lg-12 col-xxl-12 mb-lg-0 mb-3">
											<p>Monthly Limits</p>
											<div className="row">
												<div className="col-sm-4 mb-sm-0 mb-4 text-center">
													<div className="d-inline-block position-relative donut-chart-sale mb-3">
														{background.value === "dark" ? (
														  <Donut
															value={66}
															backgroundColor="rgb(255, 104, 38)"
															backgroundColor2="#2c254a"
														  />
														) : (
														  <Donut value={66} backgroundColor="rgb(255, 104, 38)" 
															backgroundColor2="#eee"
														  />
														)}
														<small>66%</small>
													</div>
													<h5 className="fs-18 text-black">Main Limits</h5>
													<span>$10,000</span>
												</div>
												<div className="col-sm-4 mb-sm-0 mb-4 text-center">
													<div className="d-inline-block position-relative donut-chart-sale mb-3">
														{background.value === "dark" ? (
														  <Donut
															value={45}
															backgroundColor="#1DC624"
															backgroundColor2="#2c254a"
														  />
														) : (
														  <Donut value={45} backgroundColor="#1DC624" 
															backgroundColor2="#eee"
														  />
														)}
														<small>45%</small>
													</div>
													<h5 className="fs-18 text-black">Seconds</h5>
													<span>$500</span>
												</div>
												<div className="col-sm-4 text-center">
													<div className="d-inline-block position-relative donut-chart-sale mb-3">
														{background.value === "dark" ? (
														  <Donut
															value={25}
															backgroundColor="#9E9E9E"
															backgroundColor2="#2c254a"
														  />
														) : (
														  <Donut value={25} backgroundColor="#9E9E9E" 
															backgroundColor2="#eee"
														  />
														)}
														<small>25%</small>
													</div>
													<h5 className="fs-18 text-black">Others</h5>
													<span>$100</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-12">
							<div className="card">
								<div className="card-header d-block d-sm-flex border-0 pb-sm-0 pb-0 align-items-center select-btn">
									<div className="mr-auto mb-sm-0 mb-3">
										<h4 className="fs-20 text-black">Coin Chart</h4>
										<p className="mb-0 fs-12">Lorem ipsum dolor sit amet, consectetur</p>
									</div>
								</div>
								<div className="card-body pt-3">
									<div className="flex-wrap mb-sm-4 mb-2 align-items-center">
										<div className="d-flex align-items-center">
											<span className="fs-32 text-black font-w600 pr-3">$557,235.31</span>
											<span className="fs-22 text-success">7% <i className="fa fa-caret-up scale5 ml-2 text-success" aria-hidden="true"></i></span>
										</div>
										<p className="mb-0 text-black mr-auto">Last Week <span className="text-success">$563,443</span></p>
									</div>
									<div id="chartTimeline" className="timeline-chart market-line">
										<CoinChart />	
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}		
export default Wallet;