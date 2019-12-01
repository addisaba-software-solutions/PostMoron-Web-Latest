import React from "react";
import { Link } from "react-router-dom";
import Echo from "laravel-echo"
import Pusher from 'pusher-js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import "../../views/IndexSections/local.css"
import $ from "jquery";
import {
	getAllUser, getMessage, clickToChat, sendMessage, addMessage,
} from './../../store/userAction';


// reactstrap components
import {
	Container,
	FormGroup,
	Input
} from "reactstrap";

// core components
import HomeNavbar from "components/Navbars/HomeNavbar.jsx";
import URL from './../../apiImage'
let cur_user_id;

class Message extends React.Component {

	scrollTop() {
		$(".msg_history").animate({ scrollTop: 20000000 }, "slow");
	}

	scrollToBottom = () => {
		this.messagesEnd.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
	}

	componentDidMount() {
		document.body.classList.toggle("msg-page2");
		this.props.getAllUser();

		var pusher = new Pusher('3346cec27d06f7394391', {
			cluster: 'ap2',
			forceTLS: true,
			encrypted: true
		});
		var channel = pusher.subscribe('my-channel');
		channel.bind('my-event', data => {

			if (data.from == localStorage.getItem('email')) {
				this.props.addMessage(data);
				this.scrollTop();

			}
			if (data.to == localStorage.getItem('email')) {
				this.props.addMessage(data);
				this.scrollTop();

			}
			this.props.getAllUser();

		});
	}

	showbox = (cur_user) => {
		cur_user_id = cur_user.email;
		$("#" + cur_user.id).click(function () {
			$(".message-box").show("slow");
		});
		this.props.clickToChat(cur_user);
		this.props.getMessage(cur_user.email);
		this.props.getAllUser();
		this.scrollTop();
	}
	hidebox = () => {

		$("#back").click(function () {
			$(".message-box").hide("fast")
		});

	}

	sendMessage = (e) => {
		if (e.key === 'Enter' && $('#message').val() !== null) {
			var receiver = null;
			var message = $('#message').val();
			$('#message').val('');

			this.props.currentUserDetail.map(active => {
				receiver = active.email;
			})
			this.props.sendMessage(receiver, message);

			this.props.getMessage(receiver);
			this.props.getAllUser();
		}
	}
	componentWillUnmount() {
		document.body.classList.toggle("msg-page2");
	}


	render() {

		return (
			<div>
				<HomeNavbar />
				<div className="wrapper">

					<div className="section">
						<Container>

							<div className="sidepanel">

								<div className="row">
									<div className="col-md-4">
										<div className="chat-list-box" id="lists">
											<div className="head-box">
												<ul className="list-inline text-left d-inline-block float-left">
													<li> <img src="https://i.ibb.co/fCzfFJw/person.jpg" alt="" width="40px" /> </li>
												</ul>
												<ul class="flat-icon list-inline text-right d-inline-block float-right">
													<li> <a href="#b"> <i className="fas fa-search"></i> </a> </li>
													<li> <a href="#b"> <i className="fas fa-ellipsis-v"></i> </a> </li>
												</ul>
											</div>

											<div class="chat-person-list" >
												<ul class="list-inline">
													{
														this.props.users.length > 0 ? (
															this.props.users.map(data => {

																return (
																	<li> <a href="#" onClick={() => this.showbox(data)} id={data.id} className="flip">
																		<img src={data.image ? URL + data.image : ("https://i.ibb.co/fCzfFJw/person.jpg")} alt="" /> <span>{data.firstName} {data.lastName}
																		</span> <span className="badge bg-important fas fa-arrow-down glypicon_color faa-bounce animated" style={{ fontSize: '20px' }}>{data.unread > 0 ? data.unread : null}</span> </a> </li>

																)
															})
														) : (
																<div className=''>
																	<Link className="rounded-pill btn btn-outline-success"
																		to='/explorer-page'
																	> Get Started</Link>

																</div>

															)
													}
												</ul>
											</div>

										</div>
									</div>

									<div className="col-md-8">
										<div ref="toggle" id="message-box" className="message-box">

											{
												this.props.currentUserDetail.map(cur_user => {

													return (
														<div className="head-box-1">
															<ul className="msg-box list-inline text-left d-inline-block float-left">
																<li> <i className="fas fa-arrow-left" onClick={this.hidebox} id="back"></i> </li>
																<li> <img src={cur_user.image ? URL + cur_user.image : ("https://i.ibb.co/fCzfFJw/person.jpg")} alt="" width="40px" /> <span> {cur_user.firstName} </span> <small class="timee"> 12:45 Pm </small> </li>
															</ul>

															<ul className="flat-icon list-inline text-right d-inline-block float-right">
																<li> <a href="#b"> <i className="fas fa-video"></i> </a> </li>
																<li> <a href="#b"> <i className="fas fa-camera"></i> </a> </li>
																<li>
																	<a href="#b" id="dset"> <i className="fas fa-ellipsis-v"></i> </a>
																	<div className="setting-drop">
																		<ul className="list-inline">
																			<li> <a href="#b"> My Profile</a> </li>
																			<li> <a href="#b"> Setting </a> </li>
																			<li> <a href="#b"> Privacy Policy </a> </li>
																			<li> <a href="#b"> Hidden chat  </a> </li>
																			<li> <a href="#b"> Logout </a> </li>
																		</ul>
																	</div>
																</li>
															</ul>
														</div>
													)


												})



											}




											<div className="msg_history">
												{
													this.props.message.map(msg => {
														return (

															(cur_user_id == msg.from || cur_user_id == msg.to) ? (



																msg.from == localStorage.getItem('email') ?
																	(

																		<div className="outgoing_msg">
																			<div className="sent_msg">
																				<p>{msg.message}</p>
																				<span className="time_date">{msg.created_at}</span> </div>
																		</div>

																	) : (
                                                                  <div>
																		<div className="incoming_msg_img">
																			 <img src={URL + msg.image} alt="sunil" /> </div>
																		<div className="received_msg">
																			<div className="received_withd_msg">
																				<p>{msg.message}</p>
																				<span className="time_date"> {msg.created_at}</span></div>
																		</div>
																		</div>
																	

																	)





															) : null



														)

													})

												}

											</div>
											{
												cur_user_id ? (

													<div className="send-message">
														<FormGroup>
															<Input placeholder="Type your message here ..." type="text" onKeyPress={this.sendMessage.bind(this)} id="message" />
														</FormGroup>
														<ul className="list-inline">
															<li>
																<a href="#b" id="attach">  <i class="fas fa-paperclip"></i> </a>
																<div className="attachement">
																	<ul className="list-inline">
																		<li> <a href="#b"> <i className="fas fa-file"></i> </a> </li>
																		<li> <a href="#b"> <i className="fas fa-camera"></i> </a> </li>
																		<li> <a href="#b"> <i className="fas fa-image"></i> </a> </li>
																		<li> <a href="#b"> <i className="far fa-play-circle"></i> </a> </li>
																		<li> <a href="#b"> <i className="fas fa-map-marker-alt"></i> </a> </li>
																		<li> <a href="#b"> <i className="fas fa-id-card"></i> </a> </li>
																	</ul>
																</div>
															</li>
															<li> <i className="fas fa-paper-plane"></i> </li>
														</ul>

													</div>




												) : null

											}


										</div>
									</div>



								</div>
							</div>





						</Container>
					</div>

				</div>
			</div>
		);
	}

}
function mapStateToProps(state) {
	return {
		is_typing: state.capd.is_typing,
		users: state.capd.users,
		message: state.capd.messages,
		currentUserDetail: state.capd.currentUserDetail,
		message_counter: state.capd.message_counter,

	}
}


const mapDispatchToProps = {
	getAllUser,
	clickToChat,
	getMessage,
	sendMessage,
	addMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Message);

