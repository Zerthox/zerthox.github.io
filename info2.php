<!DOCTYPE html>
<html lang="en-us">
	<head>
	    <meta charset="UTF-8">
	    <title>Zerthox</title>
	    <meta name="description" content=""/>
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
	    <link rel="stylesheet" href="css/normalize.css">
	    <link rel="stylesheet" href="css/main.css">
		<script type="text/javascript" src="js/jquery.min.js"></script>
	</head>
  	<body>
	    <section class="site-header">
	    	<h1 class="header-name">Zerthox</h1>
	    </section>
	    <section class="site-body">
	    	<ul class="tab-bar">
	      		<a href="index" class="tab-bar-item"><li>Home</li></a>
	      		<a href="info" class="tab-bar-item active"><li>Info</li></a>
	      		<a href="links" class="tab-bar-item"><li>Links</li></a>
	    	</ul>
	    	<div class="content">
	        	<h1>Zerthox</h1>
	        	<p>German Dev, Gamer and Editor.</p>
	        	<ul class="list games">
	        	<h3>Favorite Games:</h3>
	        		<a href="http://www.counter-strike.net" target="_blank">
	        			<li class="list-item csgo">
		        			<div class="info"><span class="title name">Counter-Strike: Global Offensive</span><span class="text">Rifler (Lurker), no longer active</span></div>
						<div class="ghost-text"><?php
							$r = file_get_contents("https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=01A9EC52293BBAC648A4210DAFC85B7F&steamid=76561198088657844&format=json");
							$g = json_decode($r)->response->games;
							for ($i = 0; $i < $g.length; $i++) {
			                    if ($g[i]->appid === 730) {
			                        $csgo = $g[i]->playtime_forever;
			                    }
			                }
							echo $csgo + "h";
						?></div>
					</li>
	        		</a>
	        		<a href="https://www.smitegame.com" target="_blank">
	        			<li class="list-item smite">
		        			<div class="info"><span class="title name">SMITE</span><span class="text">Raijin Main</span></div>
	        				<div class="ghost-text">~400h</div>
					</li>
	        		</a>
	        		<a href="https://tomclancy-thedivision.ubisoft.com" target="_blank">
	        			<li class="list-item division">
		        			<div class="info"><span class="title name">The Division</span><span class="text">Skulls DPS/Tactician Healer/Deadeye Sniper</span></div>
	        			<div class="ghost-text">~200h</div>
					</li>
	        		</a>
	        	</ul>
	    	</div>
	    </section>
	    <footer class="site-footer">
	        <span class="copyright">Copyright Zerthox 2017</span>
	    </footer>
	</body>
</html>
