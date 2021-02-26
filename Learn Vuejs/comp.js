 var Event = new Vue();
 Vue.component("tabs", {
 	template: `
 			<div class="card" style="height:300px; width:800px;">
	            <div class="card-body">
	                <ul>
	                   <li v-for="tab in tabs" :class="{'active': tab.selectedNow}" @click="makeEvent(tab.name)">
	                   	 	{{tab.name}}
	                   </li>
	                </ul>
	                <slot></slot>
	            </div>
       		 </div>

 	`,
 	data : function(){
 		return {
 			tabs : [],
 		}
 	},
 	methods : {
 		makeEvent : function(s){
 			Event.$emit("tabchange", s);
 		}
 	},
 	created : function(){
 		this.tabs = this.$children;
 	},
 });
 Vue.component("tab", {
 	template: `
 			<div v-if="selectedNow">
               <slot></slot>
            </div>
 	`,
 	data : function(){
 		return {
 			selectedNow : false,
 		}
 	},
 	created : function(){
 		var CurrentTab = this;
 		CurrentTab.selectedNow = CurrentTab.selected;
 		Event.$on("tabchange", function(s){
 			if(s==CurrentTab.name){
 				CurrentTab.selectedNow = true;
 			}else
 			{
 				CurrentTab.selectedNow = false;
 			}
 		})
 	},
 	props : ["name", "selected"],
 });
