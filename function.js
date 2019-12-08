function Notif() {
	document.getElementById("roll").innerHTML = '<div class="jumbotron bg-dark text-white"><div class="container text-center"><h1>Notifications</h1></div></div><div class="container"><h4>Penilaian <span class="badge badge-info">New</span></h4><p>Untuk kategori penilaian, bagi peserta pensubmit flag pertama maka akan ada tambahan score</p><h4>Format Flag <span class="badge badge-info">New</span></h4><p>Format Flag nya adalah <b>SmithCTF{  }</b></p><h4>Server Down ? <span class="badge badge-info">New</span></h4><p>Jika Service Mati Harap Hubungi : <br> <a href="https://t.me/rizqiwahyudi" target="_blank">Rizqi Wahyudi</a></p></div>'
};

function score(){
	document.getElementById("roll").innerHTML = '<div class="jumbotron bg-dark text-white"><div class="container text-center"><h1>Scoreboard</h1></div></div><div class="container"><div class="row"><div class="col-md-12"><table class="table table-striped table-hover"><thead><tr><td scope="col" width="10px"><b>Place</b></td><td scope="col"><b>User</b></td><td scope="col"><b>Score</b></td></tr></thead><tbody><tr><th scope="row" class="text-center">1</th><td>SumekarID.CTF</td><td>250</td></tr><tr><th scope="row" class="text-center">2</th><td>R.O.P</td><td>230</td></tr><tr><th scope="row" class="text-center">3</th><td>bin /us</td><td>200</td></tr><tr><th scope="row" class="text-center">4</th><td>ZEN</td><td>180</td></tr><tr><th scope="row" class="text-center">5</th><td>AKU CINTA BSSN</td><td>150</td></tr></tbody></table></div></div></div>'
};

function chall(){
	document.getElementById("roll").innerHTML = '<div class="jumbotron bg-dark text-white"><div class="container text-center"><h1>Challenges</h1></div></div>'
};

function profile(){
	document.getElementById("roll").innerHTML = '<div class="jumbotron bg-dark text-white"><div class="container text-center"><h1>SumekarID.CTF</h1><h2>1<small> place</small></h2><h2>250<small> points</small></h2></div></div><div class="container"><div class="row"><div class="col-md-12"><h3>Solves</h3><table class="table table-striped table-hover"><thead><tr><td><b>Challenge</b></td><td class="d-none d-md-block d-lg-block"><b>Category</b></td><td><b>Value</b></td><td><b>Time</b></td></tr></thead><tbody><tr><td>KUE bolu !</td><td class="d-none d-md-block d-lg-block">Web Hacking</td><td>100</td><td>5 Hours ago</td></tr><tr><td>GET ME !</td><td class="d-none d-md-block d-lg-block">Web Hacking</td><td>100</td><td>5 Hours ago</td></tr></tbody></table></div></div></div>'
}

function login(){
	document.getElementById("roll").innerHTML = '<div class="jumbotron bg-dark text-white"><div class="container text-center"><h1>Login</h1></div></div><div class="container"><div class="row"><div class="col-md-6 offset-md-3"><form action="" method="post" class="form-horizontal" accept-charset="UTF-8" autocomplete="off" role="form"><div class="form-group"><label for="uname">Username or Email</label><input type="text" name="name" class="form-control" id="uname" style="border-color: gray;"></div><div class="form-group"><label for="pass">Password</label><input type="Password" name="pass" class="form-control" id="pass" style="border-color: gray;"></div><div class="row pt-3"><div class="col-md-6"><a class="float-left align-text-to-button" href="reset-password.html">Forgot Your Password?</a></div><div class="col-md-6"><button class="btn btn-md btn-primary btn-outlined float-right" type="submit" tabindex="5" onclick="chall()">Submit</button></div></div></form></div></div></div>'
}

function regis(){
	document.getElementById("roll").innerHTML = '<div class="jumbotron bg-dark text-white"><div class="container text-center"><h1>Register</h1></div></div><div class="container"><div class="row"><div class="col-md-6 offset-md-3"><form action="" method="post" class="form-horizontal" accept-charset="UTF-8" autocomplete="off" role="form"><div class="form-group"><label for="uname">Username</label><input type="text" name="name" class="form-control" id="uname" style="border-color: gray;"></div><div class="form-group"><label for="email">Email</label><input type="email" name="name" class="form-control" id="email" style="border-color: gray;"></div><div class="form-group"><label for="pass">Password</label><input type="Password" name="pass" class="form-control" id="pass" style="border-color: gray;"></div><div class="row pt-3"><div class="col-md-12"><button class="btn btn-md btn-primary btn-outlined float-right" type="submit" tabindex="5" onclick="chall()">Submit</button></div></div></form></div></div></div>'
}

function valid(event){
	if (event.keyCode == 13) {
		var x = document.getElementById('flagOne').value;
		if (x == 'SmithCTF{Easy_C00ki3_St3aling_&_Sess10n_HiJ4cking}') {
			document.getElementById('result1').innerHTML = '<div class="alert alert-success alert-dismissible fade show"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Correct !</strong></div>';
		}else{
			document.getElementById('result1').innerHTML = '<div class="alert alert-danger alert-dismissible fade show"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Incorrect !</strong></div>';
		}
	}
}

function validNew(event){
	if (event.keyCode == 13) {
		var y = document.getElementById('flagTwo').value;
		if (y == 'SmithCTF{Hemmmm_T3rnYat4_Hany4_URL_3Nc0de_hiyaa}') {
			document.getElementById('result2').innerHTML = '<div class="alert alert-success alert-dismissible fade show"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Correct !</strong></div>';
		}else{
			document.getElementById('result2').innerHTML = '<div class="alert alert-danger alert-dismissible fade show"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Incorrect !</strong></div>';
		}
	}
}