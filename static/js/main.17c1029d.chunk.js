(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(7),o=a.n(i),r=(a(13),a(1)),s=a(2),l=a(5),d=a(4),u=a(3),v=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).calc_vacc_data=c.calc_vacc_data.bind(Object(u.a)(c)),c}return Object(s.a)(a,[{key:"calc_vacc_data",value:function(e){return{latest:e[e.length-1].total_vaccinations,delta:e[e.length-1].total_vaccinations-e[e.length-2].total_vaccinations}}},{key:"render",value:function(){if("Vaccination"==this.props.type){var e=this.calc_vacc_data(this.props.data);return n.a.createElement("div",{id:"vaccination",className:"feature col"},n.a.createElement("h2",null,"Vaccination"),n.a.createElement("h4",null,e.latest),n.a.createElement("span",null,e.delta))}var t=this.props.type,a=this.props.data,c="Delta_".concat(t);return n.a.createElement("div",{id:t.toLowerCase(),className:"feature col"},n.a.createElement("h2",null,t),n.a.createElement("h4",null,a[0][t]),n.a.createElement("span",null,a[0][c]))}}]),a}(n.a.Component),_=(a(14),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).state={cumulatives:[{" .":"188",State_Code:"GJ",State:"Gujarat",District_Key:"GJ_Vadodara",District:"Vadodara",Confirmed:131761,Active:13894,Recovered:117041,Deceased:826,Migrated_Other:0,Delta_Confirmed:1413,Delta_Active:-1485,Delta_Recovered:2894,Delta_Deceased:4,District_Notes:null,Last_Updated:null}],timeseries:[{Date:"2020-04-26",State:"Gujarat",District:"Vadodara",Confirmed:234,Recovered:56,Deceased:12,Other:0,Tested:null},{Date:"2020-04-27",State:"Gujarat",District:"Vadodara",Confirmed:240,Recovered:56,Deceased:13,Other:0,Tested:null}],vaccination:[{updated_on:"01-01-2022",total_vaccinations:2276408,total_sessions:7876,total_sites:63,dose_one:1137530,dose_two:1138878,dose_precautionary:0,male:1220092,female:1055926,others:390,covaxin:197330,covishield:2079078,sputnik:0,aefi:75,zycov:0,vac_18_45:1264357,vac_45_60:638013,above_60:374038},{above_60:402810,aefi:76,covaxin:303937,covishield:2154980,dose_one:1219905,dose_precautionary:39562,dose_two:1199450,female:1122566,male:1296371,others:412,sputnik:0,total_sessions:1126,total_sites:5,total_vaccinations:2458917,updated_on:"06-02-2022",vac_18_45:1330685,vac_45_60:651948,zycov:0}]},c}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"container px-4 py-5",id:"featured-5"},n.a.createElement("div",{id:"topcards",className:"row g-4 py-5 row-cols-1 row-cols-lg-5"},n.a.createElement(v,{type:"Confirmed",data:this.state.cumulatives}),n.a.createElement(v,{type:"Active",data:this.state.cumulatives}),n.a.createElement(v,{type:"Recovered",data:this.state.cumulatives}),n.a.createElement(v,{type:"Deceased",data:this.state.cumulatives}),n.a.createElement(v,{type:"Vaccination",data:this.state.vaccination})))}}]),a}(n.a.Component));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(_,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.17c1029d.chunk.js.map