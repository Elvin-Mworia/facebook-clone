import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import FlagIcon from '@material-ui/icons/Flag';

import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import HomeIcon from '@material-ui/icons/Home';

import {Avatar,IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from  "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"; 





function Header() {
    return ( 
<div >
       
			<div className = "header" >
				< div className = "header__left" >
					<img src = "http://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png "alt = 'logo' / >
						<div className='header__input'>
						<SearchIcon/>
						<input type="text" placeHolder="Search Facebook"/>
					   </div>
				  </div>


					<div className="header__middle"> 
					   <div className="header__option header__option__active">
							<HomeIcon fontsize="large"/> 
							</div>
						<div className="header__option">
							<FlagIcon fontsize="large"/> 
							</div>
					   <div className="header__option">
							<SubscriptionsOutlinedIcon fontsize="large"/> 
							</div>
					  <div className="header__option">
							<StorefrontOutlinedIcon fontsize="large"/> 
							</div>
					   <div className="header__option">
							<SupervisedUserCircleIcon fontsize="large"/> 
							</div>
					 </div> 
		
						<div className="header__right"> 
							<div className="header__info">
								<Avatar/> 
									<h4>Angerfist</h4>
									
							<IconButton>
								<AddIcon/>
							</IconButton>
							<IconButton>
								<ForumIcon/>
							</IconButton>
							<IconButton>
								<NotificationsActiveIcon/>
							</IconButton>
							<IconButton>
								<ExpandMoreIcon/>
							</IconButton>
		
		
		
		
		     				</div>
		
			</div> 
	</div>
		</div>
           
            
    )
}

export default Header;