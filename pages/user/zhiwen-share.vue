<template>
	<view>
			
			<view class="tupian" style="text-align: center;"><image style="width: 100%;height: 100%;" :src="bg_img"></image></view> 
			
			<view  class="img" style="text-align: center;">
				 <image  :src="img_src" mode=""></image> 

				<span >邀请码:{{user_info.id}}</span>
			</view>
			
			 
			<view class="shartitle"><view>分享</view></view>
			<view class="sharapk" >
				<button open-type="share" @click="share_wx_friend"><image style="width: 2rem;height: 2rem;" src="../../static/img/zwshare/weact.png"></image></button>
				<button open-type="share" @click="share_wx_timeline"><image style="width: 2rem;height: 2rem;" src="../../static/img/zwshare/shar.png"></image></button>
				<button><image style="width: 2rem;height: 2rem;" src="../../static/img/zwshare/qq.png"></image></button>
			</view>
			

	</view>
</template>



<script>
import QR from '@/components/qrcode/wxqrcode.js'	
	

	export default {	
		data() {
			return {
				bg_img:"",
				
				providerList:[],					
				
				
				share_link:'',
				img_src:"",
				
				user_info:{}
			};
		},
		onLoad(e) {
			console.log(e);
			
			var _this=this;
			this.load_user_info();
			//this.load_bg_img();
			//this.get_provider();
		},
		onShareTimeline(e){
			console.log(e);console.log("timelinet")
		},
		onShareAppMessage(e){
			console.log(e);console.log("appmessage");
			let uid=this.getUser().id;
			return {
				title:"分享",
				path:"pages/index/index?guider="+uid
			}
		},
		methods: {
			load_bg_img(){
				this.$post("config/find",{"name":'share_bg_img'},(res)=>{
					this.bg_img=res.data.value;
					
				})
				
			},
			load_user_info(){
				this.user_info=this.getUser();
				let uri=this.getConst().baseuri+"wxh5/#/pages/index/index?guider="+this.user_info.id;

				this.share_link=uri;
				
				var share_url=uri;
				let img = QR.createQrCodeImg(share_url, {
				     size: parseInt(300)//二维码大小  
				})
				this.img_src=img;
				
				
			},
		
			share_wx_friend(e) {		
				if(this.isApp()){
					uni.share({
						provider: "weixin",
						//scene: this.providerList[res.tapIndex].type && this.providerList[res.tapIndex].type === 'WXSenceTimeline' ? 'WXSenceTimeline' : "WXSceneSession",
						scene:"WXSceneSession",
						type: 0,
						title:'搭健康商城',
						summary: '点击下载搭健康商城',
						imageUrl: this.getConst().host+"images/icon.png",
						href:this.share_link,
						success: (res) => {
							console.log("success:" + JSON.stringify(res));
						},
						fail: (e) => {
							uni.showModal({
								content: e.errMsg,
								showCancel:false
							})
						}
					});
				}else{
					console.log(e);
				}
				

				 
			},
			
			share_wx_timeline(e) {
				if(this.isApp()){
					uni.share({
						provider: "weixin",
						//scene: this.providerList[res.tapIndex].type && this.providerList[res.tapIndex].type === 'WXSenceTimeline' ? 'WXSenceTimeline' : "WXSceneSession",
						scene:"WXSenceTimeline",
						type: 0,
						title:'搭健康商城',
						summary: '点击下载搭健康商城',
						imageUrl: this.getConst().host+"images/icon.png",
						href:this.share_link,
						success: (res) => {
							console.log("success:" + JSON.stringify(res));
						},
						fail: (e) => {
							uni.showModal({
								content: e.errMsg,
								showCancel:false
							})
						}
					});
				}else{
					console.log(e);
				}
				
				
	 
			},
		}
	};
</script>
 
<style lang="scss">
	  .mask{
		  position: absolute;
		  width: 100%;
		  height: 6.4rem;
		  top: 64%;
		  background-color: #f1f1f1;
		  
	  }
	
		.tupian{
		width: 100%;
		height: 1240upx;
		/* background-image: url('../../static/cooperation.png'); */
		background-size:750upx 1240upx ;
	}
	
.tugurl{
		color: #999;
		font-size: 15px;
	}
	.sharbuttn{
		display: flex;
		justify-content: center;
	}
	.shartitle{
		    width: 80%;
			text-align: center;
			margin-left: 10%;
			border-bottom: 1px solid #dddddd;
			position: relative;
			height: 60upx;
	}
	.tgtit{
		text-align: center;
	}
	.shartitle view{
		    height: 50upx;
			line-height: 50upx;
			font-size: 28upx;
			color: #999;
			width: 120upx;
			margin: 32upx auto;
			position: absolute;
			background: #fff;
			left: 50%;
			margin-left: -60upx;
	}
	.sharapk{
	 display: flex;
	 justify-content: center;
	 margin: 20upx auto
	}
	.sharapk view{
		margin: 40upx;
	}
	.sharapk view image{
		height: 80upx;
		width: 80upx;
	}
	.content{
		width: 100%;
		background-color: #ffffff;
	}
	.top{
		width: 100%;
		height:220upx;
		background: url(http://pds.jyt123.com/wxtest/banner.png) no-repeat ;
		background-size:100% ;
		background-position:center center;
	}
	.banner{
		width: 100% ;
		background-color: #FFFFFF;
		border-radius: 60upx 60upx 0 0;
		margin-top: -60upx;
	}
	.banner dl{
		margin-top: -80upx;
	}
	.banner dl dt{
		text-align: center;
	}
	.banner dl dt image{
		width: 160upx;
		height: 160upx;
		border-radius:50% ;
	}
	.banner dl dd{
		text-align: center;
	}
	.img{
		position: absolute;
		top: 39%;
		left: 30%;
		width: 280upx;
		height: 270upx;
		background-color: red;
		margin: 0 auto;
		//margin-top: 60upx;
	}
	.img image{
		width: 100%;
		height: 100%;
	}
	.btn{
		width: 260upx;
		height: 60upx;
		line-height: 60upx;
		margin: 0 auto;
		margin-top: 60upx;
		border-radius: 40upx;
		border: 0;
		font-size: 26upx;
		outline: 0;
		background: #33b17b;
		color: #FFFFFF;
		text-align: center;
	}
	.bottom{
		width: 100%;
		height: 400upx;
	/* 	background: url(../../static/img/beij.png) no-repeat; */
		background-position:left bottom;/* 设置背景图片位置 */
		background-size: 20%;
	}
	.bottom ul{
		padding-left: 40upx;
		box-sizing: border-box;
	}
	.bottom ul li{
		width: 100%;
		height: 60upx;
	}
	
</style>
