<template>
	
		<view style="width: 100vw; height: 100vh;" v-if="showMask">
			<view  style="position: fixed;top: 0;bottom: 0;left: 0;right: 0; background-color: rgba(0, 0, 0, 0.7); z-index: 9999;" class="flex m-center c-center">			
			<view style="height:12rem;width: 15rem;border-radius: 13px; " class="bcfff ps-re">

				<view class="w100p h80p flex c-center m-center" style="color: #aaaaff; font-size: 10px;">
					<view class="h90p w90p" v-html="yszccont" @tap="toyszcdetail()">
						
					</view>
					
				</view>
				<view class="w100p h20p flex" style="color: #00BFFF; margin-top: -0.3rem;" >
					<view class="w50p h100p flex c-center m-center"  @click="closePopup">暂不使用</view>
					<view class="w50p h100p flex c-center m-center" @click="isEstablish">同意</view>
					
				</view>
				
			</view>
			
		</view></view>

</template>

<script>

    export default {
        components: {
			
        },
        data() {
            return {
				yszccont:"",
				
				showMask:false,
				//nextPage:"/pages/index/guider",

            }
        },
		created() {
			this.showyszc();
		},
        methods: {
			toyszcdetail(){
				this.$navigateTo('/pages/common/html?key=cfg_reg_pocy');
			},
			closePopup(){
				plus.runtime.quit();
			},
			isEstablish(){
				this.$dataLocal("is_agree",1);
				this.showMask=false;
				//this.$refs.popup.close();
				//this.$redirectTo(this.nextPage);
			},
			
			showyszc(){
				let txt='请你务必审慎阅读、充分理解《 隐私政策 》各条款,包括但不限于: 为了向你提供即时通讯、内容分享等服务,我们需要收集你的设备信息、操作日志等个人信息。你可以在"设置"中查看、变更、删除个人信息并管理你的授权。你可阅读 ';
				txt=txt+'<span style="color:#007BFA;" >《隐私政策》</span>'
				txt=txt+'了解详细信息。如你同意,请点击同意,开始接受我们的服务。';
				this.yszccont=txt;
				
				let is_agree=this.$dataLocal("is_agree");
				if(1==is_agree){
					this.showMask=false;
					//this.$redirectTo(this.nextPage);
				}else{
					this.showMask=true;
					//setTimeout(res=>{this.$refs.popup.open();},1000);
				}
				
				
			},

        }
    }
</script>

<style>
 page,.main{
 	width: 100%;
 	height: 100%;
 }
  
</style>
