
 var engScore =document.getElementById('eng').value;
function getGradeEngScore(){

	
 engScore =document.getElementById('eng').value;

	 if (engScore<40){

	 	 document.getElementById('engGrade').value='F';
	 }

	else if (engScore==40 && engScore<=45){
	 	
	 	 document.getElementById('engGrade').value='E';
		

	}

	else if (engScore<45 && engScore>=50){

		document.getElementById('engGrade').value='D';
	} 

	else if (engScore>'50' && engScore<='60'){
		document.getElementById('engGrade').value='C';

	}

	else if (engScore>='60' && engScore<='69'){
		document.getElementById('engGrade').value='B';
	}

	else if (engScore>='70'){
		document.getElementById('engGrade').value='A';

	}

	else if (engScore=="") {
		document.getElementById('engGrade').value= "";


	}
	 }

	 var mathScore =document.getElementById('math').value;


	function getGradeMathScore(){

		  mathScore =document.getElementById('math').value;

		 if (mathScore<'40') {
		 	document.getElementById('mathGrade').value='F';
		 }

		 else if (mathScore=='40' && mathScore<='45'){
	 	
	 	 document.getElementById('mathGrade').value='E';
		

	}

	else if (mathScore>'45' && mathScore<'50'){

		document.getElementById('engGrade').value='D';
	} 

	else if (mathScore>'50' && mathScore<'60'){
		document.getElementById('mathGrade').value='C';

	}

	else if (mathScore>='60' && mathScore<='69'){
		document.getElementById('mathGrade').value='B';
	}

	else if (mathScore>='70'){
		document.getElementById('mathGrade').value='A';



	}

}
       var bioScore =document.getElementById('bio').value;
    function getGradeBioScore(){

		  bioScore =document.getElementById('bio').value;

		 if (bioScore<'40') {
		 	document.getElementById('bioGrade').value='F';
		 }

		 else if (bioScore=='40' && bioScore<='45'){
	 	
	 	 document.getElementById('bioGrade').value='E';
		

	}

	else if (bioScore>'45' && bioScore<'50'){

		document.getElementById('bioGrade').value='D';
	} 

	else if (bioScore>'50' && bioScore<'60'){
		document.getElementById('bioGrade').value='C';

	}

	else if (bioScore>='60' && bioScore<='69'){
		document.getElementById('bioGrade').value='B';
	}

	else if (bioScore>='70'){
		document.getElementById('bioGrade').value='A';



	}

}

var bioScore =document.getElementById('bio').value;
function getGradeBioScore(){

		  bioScore =document.getElementById('bio').value;

		 if (bioScore<'40') {
		 	document.getElementById('bioGrade').value='F';
		 }

		 else if (bioScore=='40' && bioScore<='45'){
	 	
	 	 document.getElementById('bioGrade').value='E';
		

	}

	else if (bioScore>'45' && bioScore<'50'){

		document.getElementById('bioGrade').value='D';
	} 

	else if (bioScore>'50' && bioScore<'60'){
		document.getElementById('bioGrade').value='C';

	}

	else if (bioScore>='60' && bioScore<='69'){
		document.getElementById('bioGrade').value='B';
	}

	else if (bioScore>='70'){
		document.getElementById('bioGrade').value='A';

	}
}
 var frenchScore =document.getElementById('french').value;
function getGradeFrenchScore(){

		  frenchScore =document.getElementById('french').value;

		 if (frenchScore<'40') {
		 	document.getElementById('frenchGrade').value='F';
		 }

		 else if (frenchScore=='40' && frenchScore<='45'){
	 	
	 	 document.getElementById('frenchGrade').value='E';
		
	}

	else if (frenchScore>'45' && frenchScore<'50'){

		document.getElementById('frenchGrade').value='D';
	} 

	else if (frenchScore>'50' && frenchScore<'60'){
		document.getElementById('frenchGrade').value='C';

	}

	else if (frenchScore>='60' && frenchScore<='69'){
		document.getElementById('frenchGrade').value='B';
	}

	else if (frenchScore>='70'){
		document.getElementById('frenchGrade').value='A';

	}
}

   var chemScore =document.getElementById('chem').value;
function getGradeChemistryScore(){

		 chemScore =document.getElementById('chem').value;

		 if (chemScore<'40') {
		 	document.getElementById('chemGrade').value='F';
		 }

		 else if (chemScore=='40' && chemScore<='45'){
	 	
	 	 document.getElementById('chemGrade').value='E';
		
	}

	else if (chemScore>'45' && chemScore<'50'){

		document.getElementById('chemGrade').value='D';
	} 

	else if (chemScore>'50' && chemScore<'60'){
		document.getElementById('chemGrade').value='C';

	}

	else if (chemScore>='60' && chemScore<='69'){
		document.getElementById('chemGrade').value='B';
	}

	else if (chemScore>='70'){
		document.getElementById('chemGrade').value='A';

	}
}


var total = parseInt(engScore) + parseInt(chemScore) + parseInt(mathScore)+parseInt (frenchScore)+parseInt (bioScore);
function totalScore(){
	total = parseInt(engScore) + parseInt(chemScore) + parseInt(mathScore)+parseInt (frenchScore)+parseInt (bioScore);
	document.getElementById('totals').innerHTML=total;


}
var averageScore = total/5;
function average(){
	total = parseInt(engScore) + parseInt(chemScore) + parseInt(mathScore)+parseInt (frenchScore)+parseInt (bioScore);

	 averageScore = total/5;
	document.getElementById('ave').innerHTML=averageScore;

}

function remark(){
	if (averageScore<='50') {

		document.getElementById('remark').innerHTML='you passed';
		
	}


	else  {
		document.getElementById('remark').innerHTML='you failed';


	}

}

function allFunction(){

	remark();
	average();
	totalScore();
}

