this.JST=this.JST||{},this.JST["business.tmpl.js"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+='<div class="business_container_small">\n	<div class="business_small_img">\n		<img src="',(f=c.header_url)?f=f.call(b,{hash:{},data:e}):(f=b&&b.header_url,f=typeof f===h?f.call(b,{hash:{},data:e}):f),g+=i(f)+"\" />\n	</div>\n	<a class='business_small_img_link' href=\"",(f=c.url)?f=f.call(b,{hash:{},data:e}):(f=b&&b.url,f=typeof f===h?f.call(b,{hash:{},data:e}):f),g+=i(f)+'" data-index_x="',(f=c.x)?f=f.call(b,{hash:{},data:e}):(f=b&&b.x,f=typeof f===h?f.call(b,{hash:{},data:e}):f),g+=i(f)+'" data-index_y="',(f=c.y)?f=f.call(b,{hash:{},data:e}):(f=b&&b.y,f=typeof f===h?f.call(b,{hash:{},data:e}):f),g+=i(f)+'"></a>\n	<h1>',(f=c.name)?f=f.call(b,{hash:{},data:e}):(f=b&&b.name,f=typeof f===h?f.call(b,{hash:{},data:e}):f),g+=i(f)+"</h1>\n	<h2>",(f=c.village)?f=f.call(b,{hash:{},data:e}):(f=b&&b.village,f=typeof f===h?f.call(b,{hash:{},data:e}):f),g+=i(f)+'</h2>\n   	<div id="travel_book_ribbon">\n		<div class="my_travel_book_icon" onclick="addTravelBook(this)" data-item="',(f=c.json)?f=f.call(b,{hash:{},data:e}):(f=b&&b.json,f=typeof f===h?f.call(b,{hash:{},data:e}):f),g+=i(f)+'">\n			<div class="info-text">\n				<p class="selected">Add to My Travel Book</p>\n				<p>Remove from My Travel Book</p>\n			</div>\n		</div>\n	</div>\n</div>'}),this.JST["business_bot.tmpl.js"]=Handlebars.template(function(a,b,c,d,e){function f(){return"\n      <h1>Made it in here</h1>\n    "}function g(){return"\n      <h1>Hit the else</h1>\n    "}function h(a){var b="";return b+="\n				<li>"+m(typeof a===l?a.apply(a):a)+"</li>\n			"}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var i,j,k="",l="function",m=this.escapeExpression,n=this;return k+='<div class="business_flyout" data-index_x="',(i=c.x)?i=i.call(b,{hash:{},data:e}):(i=b&&b.x,i=typeof i===l?i.call(b,{hash:{},data:e}):i),k+=m(i)+'" data-index_y="',(i=c.y)?i=i.call(b,{hash:{},data:e}):(i=b&&b.y,i=typeof i===l?i.call(b,{hash:{},data:e}):i),k+=m(i)+'">\n	<a href="#" class="business_flyout_close">\n		<img src="https://factorylabs-unroole.s3.amazonaws.com/system/asset_images/85/original/close_button_flyout.png" />\n	</a>\n	<div class="column_0">\n		<div class="business_map_canvas" data-lat="'+m((i=b&&b.coords,i=null==i||i===!1?i:i[0],typeof i===l?i.apply(b):i))+'" data-lng="'+m((i=b&&b.coords,i=null==i||i===!1?i:i[1],typeof i===l?i.apply(b):i))+'">\n		<img src="http://maps.googleapis.com/maps/api/staticmap?center='+m((i=b&&b.coords,i=null==i||i===!1?i:i[0],typeof i===l?i.apply(b):i))+","+m((i=b&&b.coords,i=null==i||i===!1?i:i[1],typeof i===l?i.apply(b):i))+"&zoom=15&sensor=true&markers=color:red%7C"+m((i=b&&b.coords,i=null==i||i===!1?i:i[0],typeof i===l?i.apply(b):i))+","+m((i=b&&b.coords,i=null==i||i===!1?i:i[1],typeof i===l?i.apply(b):i))+'&size=380x320&key=AIzaSyA92nN0Kua54tvMskt_1bn_48nqE4PLNbY">\n		</div>\n	</div>\n\n	<div class="column_1">\n		<p>',(j=c.address)?j=j.call(b,{hash:{},data:e}):(j=b&&b.address,j=typeof j===l?j.call(b,{hash:{},data:e}):j),k+=m(j)+"</p>\n    <h1>TEST :: "+m((i=b&&b.phone,i=null==i||i===!1?i:i.length,typeof i===l?i.apply(b):i))+"</h1>\n    ",j=c["if"].call(b,(i=b&&b.phone,null==i||i===!1?i:i.length),{hash:{},inverse:n.program(3,g,e),fn:n.program(1,f,e),data:e}),(j||0===j)&&(k+=j),k+='\n\n		<a href="tel:',(j=c.phone)?j=j.call(b,{hash:{},data:e}):(j=b&&b.phone,j=typeof j===l?j.call(b,{hash:{},data:e}):j),k+=m(j)+'"> ',(j=c.phone)?j=j.call(b,{hash:{},data:e}):(j=b&&b.phone,j=typeof j===l?j.call(b,{hash:{},data:e}):j),k+=m(j)+'</a>\n		<a href="tel:',(j=c.fax)?j=j.call(b,{hash:{},data:e}):(j=b&&b.fax,j=typeof j===l?j.call(b,{hash:{},data:e}):j),k+=m(j)+'"> ',(j=c.fax)?j=j.call(b,{hash:{},data:e}):(j=b&&b.fax,j=typeof j===l?j.call(b,{hash:{},data:e}):j),k+=m(j)+'</a>\n		<a href="mailto:',(j=c.email)?j=j.call(b,{hash:{},data:e}):(j=b&&b.email,j=typeof j===l?j.call(b,{hash:{},data:e}):j),k+=m(j)+'" target="_blank" class="blue_link">',(j=c.email)?j=j.call(b,{hash:{},data:e}):(j=b&&b.email,j=typeof j===l?j.call(b,{hash:{},data:e}):j),k+=m(j)+'</a>\n		<a href="',(j=c.website)?j=j.call(b,{hash:{},data:e}):(j=b&&b.website,j=typeof j===l?j.call(b,{hash:{},data:e}):j),k+=m(j)+'" target="_blank" class="blue_link">',(j=c.website)?j=j.call(b,{hash:{},data:e}):(j=b&&b.website,j=typeof j===l?j.call(b,{hash:{},data:e}):j),k+=m(j)+'</a>\n		<a href="',(j=c.vcard_url)?j=j.call(b,{hash:{},data:e}):(j=b&&b.vcard_url,j=typeof j===l?j.call(b,{hash:{},data:e}):j),k+=m(j)+'" target="_blank" class="vcard">VCARD</a>\n	</div>\n\n	<div class="column_2">\n		<ul class="opening" >\n			<h3> Opening Period </h3>\n			',j=c.each.call(b,b&&b.opening_period,{hash:{},inverse:n.noop,fn:n.program(5,h,e),data:e}),(j||0===j)&&(k+=j),k+='\n		</ul>\n		<div class="business_flyout_description">\n			<h3> Description </h3>\n			<p>',(j=c.desc)?j=j.call(b,{hash:{},data:e}):(j=b&&b.desc,j=typeof j===l?j.call(b,{hash:{},data:e}):j),k+=m(j)+"</p>\n		</div>\n	</div>\n</div>\n"}),this.JST["event.tmpl.js"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression;return h+='<div class="event_container_small">\n	<h1>',(f=c.name)?f=f.call(b,{hash:{},data:e}):(f=b&&b.name,f=typeof f===i?f.call(b,{hash:{},data:e}):f),h+=j(f)+"</h1>\n	<h2>"+j((f=b&&b.open_hours,f=null==f||f===!1?f:f[0],typeof f===i?f.apply(b):f))+" - "+j((f=b&&b.open_hours,f=null==f||f===!1?f:f[1],typeof f===i?f.apply(b):f))+"</h2>\n	<p>",(g=c.desc)?g=g.call(b,{hash:{},data:e}):(g=b&&b.desc,g=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(g)+'</p>\n   	<div id="travel_book_ribbon">\n		<div class="my_travel_book_icon" onclick="addTravelBook(this)" data-item="',(g=c.json)?g=g.call(b,{hash:{},data:e}):(g=b&&b.json,g=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(g)+'">\n			<div class="info-text">\n				<p class="selected">Add to My Travel Book</p>\n				<p>Remove from My Travel Book</p>\n			</div>\n		</div>\n	</div>\n</div>\n'}),this.JST["event_full.tmpl.js"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression;return h+='<div class="event_full ',(f=c.id)?f=f.call(b,{hash:{},data:e}):(f=b&&b.id,f=typeof f===i?f.call(b,{hash:{},data:e}):f),h+=j(f)+'" >\n	<img src="',(f=c.header_url)?f=f.call(b,{hash:{},data:e}):(f=b&&b.header_url,f=typeof f===i?f.call(b,{hash:{},data:e}):f),h+=j(f)+'" />\n	<h1>',(f=c.name)?f=f.call(b,{hash:{},data:e}):(f=b&&b.name,f=typeof f===i?f.call(b,{hash:{},data:e}):f),h+=j(f)+"</h1>\n	<h2>"+j((f=b&&b.open_hours,f=null==f||f===!1?f:f[0],typeof f===i?f.apply(b):f))+" - "+j((f=b&&b.open_hours,f=null==f||f===!1?f:f[1],typeof f===i?f.apply(b):f))+'</h2>\n	<div class="event_full_description">\n		<p>',(g=c.desc)?g=g.call(b,{hash:{},data:e}):(g=b&&b.desc,g=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(g)+"</p>\n	</div>\n</div>\n"}),this.JST["event_sum.tmpl.js"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression;return h+='<div class="event_sum" data-id="',(f=c.id)?f=f.call(b,{hash:{},data:e}):(f=b&&b.id,f=typeof f===i?f.call(b,{hash:{},data:e}):f),h+=j(f)+'">\n	<h2>'+j((f=b&&b.open_hours,f=null==f||f===!1?f:f[0],typeof f===i?f.apply(b):f))+" - "+j((f=b&&b.open_hours,f=null==f||f===!1?f:f[1],typeof f===i?f.apply(b):f))+"</h2>\n	<h1>",(g=c.name)?g=g.call(b,{hash:{},data:e}):(g=b&&b.name,g=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(g)+"</h1>\n	<p>",(g=c.desc)?g=g.call(b,{hash:{},data:e}):(g=b&&b.desc,g=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(g)+"</p>\n</div>\n"}),this.JST["events.tmpl.js"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression;return h+='<div class="article_container_small">\n	<a class=\'article_small_img_link\' href="',(f=c.href)?f=f.call(b,{hash:{},data:e}):(f=b&&b.href,f=typeof f===i?f.call(b,{hash:{},data:e}):f),h+=j(f)+'" data-index_x="',(f=c.x)?f=f.call(b,{hash:{},data:e}):(f=b&&b.x,f=typeof f===i?f.call(b,{hash:{},data:e}):f),h+=j(f)+'" data-index_y="',(f=c.y)?f=f.call(b,{hash:{},data:e}):(f=b&&b.y,f=typeof f===i?f.call(b,{hash:{},data:e}):f),h+=j(f)+'">&nbsp;</a>\n    <div class="article_small_img">\n        <img src="',(f=c.header_url)?f=f.call(b,{hash:{},data:e}):(f=b&&b.header_url,f=typeof f===i?f.call(b,{hash:{},data:e}):f),h+=j(f)+'" />\n    </div>\n    <div class="article_container_small_text">\n        <h1>',(f=c.name)?f=f.call(b,{hash:{},data:e}):(f=b&&b.name,f=typeof f===i?f.call(b,{hash:{},data:e}):f),h+=j(f)+"</h1>\n        <h2>"+j((f=b&&b.open_hours,f=null==f||f===!1?f:f[0],typeof f===i?f.apply(b):f))+" - "+j((f=b&&b.open_hours,f=null==f||f===!1?f:f[1],typeof f===i?f.apply(b):f))+"</h2>\n        <p>",(g=c.desc)?g=g.call(b,{hash:{},data:e}):(g=b&&b.desc,g=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(g)+'</p>\n    </div>\n   	<div id="travel_book_ribbon">\n		<div class="my_travel_book_icon" onclick="addTravelBook(this)" data-item="',(g=c.json)?g=g.call(b,{hash:{},data:e}):(g=b&&b.json,g=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(g)+'">\n			<div class="info-text">\n				<p class="selected">Add to My Travel Book</p>\n				<p>Remove from My Travel Book</p>\n			</div>\n		</div>\n	</div>\n</div>\n'}),this.JST["hotels.tmpl.js"]=Handlebars.template(function(a,b,c,d,e){function f(a){var b="";return b+='\n			<div class="my_travel_book_'+j(typeof a===i?a.apply(a):a)+'">\n			</div>\n		'}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h="",i="function",j=this.escapeExpression,k=this;return h+='<div class="accommodation_container_small">\n	<div class="article_small_img">\n		<img src="',(g=c.header_url)?g=g.call(b,{hash:{},data:e}):(g=b&&b.header_url,g=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(g)+"\"></img>\n	</div>\n	<a class='article_small_img_link' href=",(g=c.url)?g=g.call(b,{hash:{},data:e}):(g=b&&b.url,g=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(g)+"></a>\n	<h1>",(g=c.name)?g=g.call(b,{hash:{},data:e}):(g=b&&b.name,g=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(g)+'</h1>\n	<div class="accommodation_star_',(g=c.rating)?g=g.call(b,{hash:{},data:e}):(g=b&&b.rating,g=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(g)+'">\n		<img src="https://factorylabs-unroole.s3.amazonaws.com/system/asset_images/41/original/stars.png?1382024420"/>\n	</div>\n	<h2>',(g=c.village)?g=g.call(b,{hash:{},data:e}):(g=b&&b.village,g=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(g)+"</h2>\n	<p>",(g=c.address)?g=g.call(b,{hash:{},data:e}):(g=b&&b.address,g=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(g)+'</p>\n	<div class="estatblishment_type">\n		',g=c.each.call(b,b&&b.estatblishment_type,{hash:{},inverse:k.noop,fn:k.program(1,f,e),data:e}),(g||0===g)&&(h+=g),h+='\n	</div>\n	<div id="travel_book_ribbon">\n		<div class="my_travel_book_icon" onclick="addTravelBook(this)" data-item="',(g=c.json)?g=g.call(b,{hash:{},data:e}):(g=b&&b.json,g=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(g)+'">\n			<div class="info-text">\n				<p class="selected">Add to My Travel Book</p>\n				<p>Remove from My Travel Book</p>\n			</div>\n		</div>\n	</div>\n</div>\n'}),this.JST["trails.tmpl.js"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+='<div class="accommodation_container_small">\n	<div class="article_small_img">\n		<img src="',(f=c.header_url)?f=f.call(b,{hash:{},data:e}):(f=b&&b.header_url,f=typeof f===h?f.call(b,{hash:{},data:e}):f),g+=i(f)+"\"></img>\n	</div>\n	<a class='article_small_img_link' href=",(f=c.url)?f=f.call(b,{hash:{},data:e}):(f=b&&b.url,f=typeof f===h?f.call(b,{hash:{},data:e}):f),g+=i(f)+"></a>\n	<h1>",(f=c.name)?f=f.call(b,{hash:{},data:e}):(f=b&&b.name,f=typeof f===h?f.call(b,{hash:{},data:e}):f),g+=i(f)+"</h1>\n	<h2>",(f=c.village)?f=f.call(b,{hash:{},data:e}):(f=b&&b.village,f=typeof f===h?f.call(b,{hash:{},data:e}):f),g+=i(f)+'</h2>\n	<h3 class="upper">',(f=c.duratin)?f=f.call(b,{hash:{},data:e}):(f=b&&b.duratin,f=typeof f===h?f.call(b,{hash:{},data:e}):f),g+=i(f)+"</h3>\n	<h3>",(f=c.difficulty)?f=f.call(b,{hash:{},data:e}):(f=b&&b.difficulty,f=typeof f===h?f.call(b,{hash:{},data:e}):f),g+=i(f)+'</h3>\n   	<div id="travel_book_ribbon">\n		<div class="my_travel_book_icon" onclick="addTravelBook(this)" data-item="',(f=c.json)?f=f.call(b,{hash:{},data:e}):(f=b&&b.json,f=typeof f===h?f.call(b,{hash:{},data:e}):f),g+=i(f)+'">\n			<div class="info-text">\n				<p class="selected">Add to My Travel Book</p>\n				<p>Remove from My Travel Book</p>\n			</div>\n		</div>\n	</div>\n</div>\n'}),this.JST["weather.tmpl.js"]=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e="";return e+='\n<div class="mountain_container">\n	<div class="today_container">\n		<h1>',(d=c.name)?d=d.call(a,{hash:{},data:b}):(d=a&&a.name,d=typeof d===i?d.call(a,{hash:{},data:b}):d),e+=j(d)+'</h1>\n		<div class="symbol_large sun"><img data-src="',(d=c.symbol)?d=d.call(a,{hash:{},data:b}):(d=a&&a.symbol,d=typeof d===i?d.call(a,{hash:{},data:b}):d),e+=j(d)+'"/></div>\n		<span class="temp1">',(d=c.temp_morn)?d=d.call(a,{hash:{},data:b}):(d=a&&a.temp_morn,d=typeof d===i?d.call(a,{hash:{},data:b}):d),e+=j(d)+"<sup>&deg;</sup>/",(d=c.temp_aft)?d=d.call(a,{hash:{},data:b}):(d=a&&a.temp_aft,d=typeof d===i?d.call(a,{hash:{},data:b}):d),e+=j(d)+'<sup>&deg;</sup></span>\n		<span class="windspeed">',(d=c.wind_speed)?d=d.call(a,{hash:{},data:b}):(d=a&&a.wind_speed,d=typeof d===i?d.call(a,{hash:{},data:b}):d),e+=j(d)+'<b>km/h</b></span>\n		<span class="direction">',(d=c.wind_direction)?d=d.call(a,{hash:{},data:b}):(d=a&&a.wind_direction,d=typeof d===i?d.call(a,{hash:{},data:b}):d),e+=j(d)+'</span>\n	\n	</div>\n	<div class="days_container">\n		',d=c.each.call(a,a&&a.day,{hash:{},inverse:k.noop,fn:k.program(2,g,b),data:b}),(d||0===d)&&(e+=d),e+="\n	</div>\n</div>\n"}function g(a,b){var d,e="";return e+='\n		<div class="day_container">\n			<h1>',(d=c.short_day)?d=d.call(a,{hash:{},data:b}):(d=a&&a.short_day,d=typeof d===i?d.call(a,{hash:{},data:b}):d),e+=j(d)+'</h1>\n			<div class="symbol_small"><img data-src="',(d=c.symbol)?d=d.call(a,{hash:{},data:b}):(d=a&&a.symbol,d=typeof d===i?d.call(a,{hash:{},data:b}):d),e+=j(d)+'"/></div>\n			<span>',(d=c.temp_morn)?d=d.call(a,{hash:{},data:b}):(d=a&&a.temp_morn,d=typeof d===i?d.call(a,{hash:{},data:b}):d),e+=j(d)+"<b>&deg;</b>/ ",(d=c.temp_aft)?d=d.call(a,{hash:{},data:b}):(d=a&&a.temp_aft,d=typeof d===i?d.call(a,{hash:{},data:b}):d),e+=j(d)+"<b>&deg;</b><span>\n		</div>\n		"}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var h,i="function",j=this.escapeExpression,k=this;return h=c.each.call(b,b&&b.village,{hash:{},inverse:k.noop,fn:k.program(1,f,e),data:e}),h||0===h?h:""});(function(){ Handlebars.templates = this['JST']; })();