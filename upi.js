let c;
function forget() 
{
    Fid.innerHTML = '<h5 style="text-align:center;">MOBILE NUMBER</h5>'+'<input type="number" id="mobnum"class="form-control"/>'+'<br>'+'<div class="text-center"><button type="button" class="btn btn-success" onclick="sendotp()">Send OTP</button><div>'+'<br><br>'+'<h5 style="text-align:center;">Enter The OTP</h5>'+'<input type="number"  id="enterotp" class="form-control"/>'+'<br>'+'<div class="text-center"><button type="button" class="btn btn-primary" onclick="setpin()">Next</button></div>'
}
function sendotp()
{
    a= document.getElementById('mobnum').value;
    if(a==sessionStorage.getItem('mob'))
    {
    pattern=/^[6-9]+[0-9]{9}$/;
    b=pattern.test(a);
    if(b==true)
    {
        c=Math.floor(Math.random()*10000);
        alert("Your OTP is "+c);
    }
    else
    {
        alert("Invalid Mobile Number")
    }
  }
  else{
    alert("ENTERED NUMBER IS NOT REGISTERED");
  }
}
function setpin()
{
   let d=document.getElementById('enterotp').value;
    if(c==d)
    {
    Fid.innerHTML='<h2 style="text-align:center;"> SET PIN</h2>'+'<br>'+'<h4 style="text-align:center;">New Pin</h4>'+'<input type="number" id="setpinnum" class="form-control"/>'+'<br>'+'<div class="text-center"><button type="button" class="btn btn-warning" onclick="pincreated()">Submit</button></div>'
    }

    else{
        alert("Please Enter Validated OTP")
    }
}
function pincreated()
{
    pinnumber=document.getElementById('setpinnum').value;
  if(pinnumber.length==6)
  {
    alert("PIN CREATED");
    sessionStorage.setItem('pin',pinnumber);
    Fid.innerHTML ='<span style="text-align: center;"><h5>PIN NUMBER</h5><input type="number" id="pin1" class="form-control"></span><br><div class="text-center"><button type="button" class="btn btn-success" onclick="Menu()">Login</button> </div><a href="#" style="margin-left: 20px; text-decoration: none;" onclick="forget()">Forget Pin</a><button type="button" class="btn btn-primary" style="margin-left: 80px;" onclick="Register()">Register</button>'
    
}
else
{
  alert("Enter a 6 digit PIN number");
}
}
function Register(){
    Fid.innerHTML ='<h5 style="text-align:center;">MOBILE NUMBER</h5>'+'<input type="number" id="regmobnum" class="form-control"/>'+'<br>'+'<div class="text-center"><button type="button" class="btn btn-primary" onclick="registerpin()">Send OTP</button><div>'+'<br><br>'+'<h5 style="text-align:center;">Enter The OTP</h5>'+'<input type="number" id="otpenter" class="form-control"/>'+'<br>'+'<div class="text-center"><button type="button" class="btn btn-warning" onclick="kyc()">Next</button></div>'
}
function registerpin()
{
    a=document.getElementById('regmobnum').value;
    sessionStorage.setItem('mob',a);
    pattern=/^[6-9]+[0-9]{9}$/
    b=pattern.test(a);
    if(b==true)
    {
        c=Math.floor(Math.random()*10000);
        alert("Your OTP is "+c)
    }
    else
    {
        alert("Invalid Mobile Number");
    }
}

function kyc()
{
    let d=document.getElementById('otpenter').value;
    if(c==d)
    {
    Fid.innerHTML ='<h3 style="text-align:center;">KYC</h3>'+'<br><br>'+'<h5 style="text-align:center;">Name</h5>'+'<input type="text" id="Name" class="form-control"/>'+'<br>'+'<h5 style="text-align:center;">Age</h5>'+'<input type="number" id="age" class="form-control"/>'+'<br>'+'<h5 style="text-align:center;">Email</h5>'+'<input type="email" id="email" class="form-control"/>'+'<br>'+'<h5 style="text-align:center;">Aadhar No</h5>'+'<input type="number" id="aadharno" class="form-control"/>'+'<br>'+'<h5 style="text-align:center;">Pin No</h5>'+'<input type="number" id="pinumbers" class="form-control"/>'+'<br>'+'<div class="text-center"><button type="button" class="btn btn-success" onclick="pageno()">Complete Kyc</button></div>'
}
else{
    alert("Please Enter Validated OTP")
}
}
function pageno()
{
    let name= document.getElementById('Name').value;
    namepattern=/^[a-zA-Z]+$/;
    let ages=document.getElementById('age').value;
    agepattern=/[0-9]+$/;
    let emails=document.getElementById('email').value;
    let aadhar=document.getElementById('aadharno').value;
    aadharpattern=/^[0-9]{12}$/;
    let Pin =document.getElementById('pinumbers').value;
    Pinpattern=/^[0-9]{6}$/;
    nametest=namepattern.test(name);
    agetest=agepattern.test(ages);
    aadhartest=aadharpattern.test(aadhar);
    pintest=Pinpattern.test(Pin);
    console.log(nametest,agetest,aadhartest,pintest);
    if(nametest==true&& agetest==true&&aadhartest==true&& pintest==true)
    {
        sessionStorage.setItem('name',name);
        sessionStorage.setItem('age',ages);
        sessionStorage.setItem('email',emails);
        sessionStorage.setItem('aadhar',aadhar);
        sessionStorage.setItem('pin',Pin);
        alert("KYC Complete");
        Fid.innerHTML ='<span style="text-align: center;"><h5>PIN NUMBER</h5><input type="number" id="pin1" class="form-control"></span><br><div class="text-center"><button type="button" class="btn btn-success" onclick="Menu()">Login</button> </div><a href="#" style="margin-left: 20px; text-decoration: none;" onclick="forget()">Forget Pin</a><button type="button" class="btn btn-primary" style="margin-left: 80px;" onclick="Register()">Register</button>'
    }
    else{
        alert("something wrong with your details")
    }
}

function Menu()
{
    let e=document.getElementById('pin1').value;
    if(e.length==6)
    {
        if(e==sessionStorage.getItem('pin'))
        {
            Fid.innerHTML ='<h2 style="text-align:center">Menu</h2>'+'<br><br>'+
            '<h5><a href="#" onclick="displaydetails()" style="text-decoration: none;">PROFILE </a></h5>'+
            '<br>'+
            '<h5><a href="#" onclick="transaction()" style="text-decoration: none;">TRANSACTIONS </a></h5>'+
            '<br>'+
            '<h5><a href="#" onclick="CheckBal()" style="text-decoration: none;">CHECK BALANCE </a></h5>'+
            '<br>'+
            '<h5><a href="#" onclick="accounts()" style="text-decoration: none;">ACCOUNTS </a></h5>'+
            '<br>'+
            '<h5><a href="#" onclick="acDetails()" style="text-decoration: none;">LINK A/C </a></h5>'+
            '<br>'
        }
        else{
            alert("Please Enter The validate Or Correct Pin")
        }
        }
        else{
            alert("Your Not  Enter The Pin Number Please Enter Your Pin Number")
        }
    }
   
function displaydetails()
{
    Fid.innerHTML ='<h2 style="text-align:center">KYC Details</h2>'+'<br><br>'+
    '<h5>Name :'+
    sessionStorage.getItem('name')+'</h5>'+
    '<br>'+ 
    '<h5>Age :'+
    sessionStorage.getItem('age')+'</h5>'+
    '<br>'+
    '<h5>E-mail :'+
    sessionStorage.getItem('email')+'</h5>'+
    '<br>'+
    '<h5>Aadhar No :' +
    sessionStorage.getItem('aadhar')+'</h5>'+
    '<br>'+'<div class="text-center"><button type="button" class="btn btn-warning" onclick="back()">back</button></div>'
}
function back()
{
    Fid.innerHTML ='<h2 style="text-align:center">Menu</h2>'+'<br><br>'+
            '<h5><a href="#" onclick="displaydetails()" style="text-decoration: none;">PROFILE </a></h5>'+
            '<br>'+
            '<h5><a href="#" onclick="transaction()" style="text-decoration: none;">TRANSACTIONS </a></h5>'+
            '<br>'+
            '<h5><a href="#" onclick="CheckBal()" style="text-decoration: none;">CHECK BALANCE </a></h5>'+
            '<br>'+
            '<h5><a href="#" onclick="accounts()" style="text-decoration: none;">ACCOUNTS </a></h5>'+
            '<br>'+
            '<h5><a href="#" onclick="acDetails()" style="text-decoration: none;">LINK A/C </a></h5>'+
            '<br>'
}
function transaction()
{
    datas=JSON.parse(sessionStorage.getItem('data'));
    Fid.style="margin-top:150px";
    Fid.innerHTML='<h2 style="text-align:center;">TRANSFER</H2><H5>Mobile no Or UPI :</h5><input id="transfermob" type="text" class="form-control">'
    +'<H5>To Mobile :</h5><input type="text" class="form-control">'
    +'<H5>Choose A/C :</h5>'+'<select id="trAcc"></select>'
    console.log(datas.length);
    for(let i=0;i<datas.length;i++)
    {
      var option = document.createElement('option');
      option.text = datas[i].bankname;
      trAcc.add(option);
    }
    Fid.innerHTML+='<H5>Amount :</h5><input type="text" id="amt" class="form-control">'
    +'<br><button type="button" onclick="moneytransfer()" class="btn btn-success">Send</button>'
  }
  let amtinp;
  function moneytransfer()
  {
    amtinp=document.getElementById('amt').value
     let mobtransfer=document.getElementById('transfermob').value;
     accBank = document.getElementById('trAcc').value;
     //alert(accBank);
     if(mobtransfer==sessionStorage.getItem('mob'))
     {
        Fid.innerHTML='<h2 style="text-align:center;">Enter T-PIN</h2><input  id="tpincheck" type="text" class="form-control">'
      +'<br><button type="button" onclick="checktpin()"  class="btn btn-success">SEND MONEY</button>'
     }
     else
     {
      alert("WRONG MOBILE NUMBER");
     }
  }
  function checktpin()
  {
    datas=JSON.parse(sessionStorage.getItem('data'));
    let tpin=document.getElementById('tpincheck').value;
    if(tpin==sessionStorage.getItem('tpin'))
    {
      for(let i=0;i<datas.length;i++)
      {
        if(accBank==datas[i].bankname)
        {
         
          if(datas[i].balance>=amtinp)
          {
            datas[i].balance=datas[i].balance-amtinp;
            sessionStorage.setItem('data',JSON.stringify(datas));
            alert("Money Transfered .... Your remaining Balance is Rs."+datas[i].balance);
            back();
          }
          else
          {
            alert("INSUFFICIENT BALANCE...");
            back();
          }
        }
      }
  
  }
    else
    {
      alert("WRONG TPIN..");
            back();
            
    }
    
  }
  
function CheckBal()
{
    datas=JSON.parse(sessionStorage.getItem('data'));
    Fid.innerHTML='<h2>CHECK BALANCE</h2><h5>Choose ACC :</h5>'+'<select id="drop"></select>'
    for(let i=0;i<datas.length;i++)
    {
      var option = document.createElement('option');
      option.text = datas[i].bankname;
      drop.add(option);
    }
    Fid.innerHTML+='<h4>T-PIN :</h4><input type="text" id="TPIN" class="form-control"><br><button onclick="showbalance()" type="button" class="btn btn-success" onclick="bal()">View Balance</button>'
  }
  let amtbal;
  function showbalance()
  {
    amtbal=document.getElementById('drop').value
    if(document.getElementById('TPIN').value==sessionStorage.getItem('tpin'))
    {
    datas=JSON.parse(sessionStorage.getItem('data'));
    for(let i=0;i<datas.length;i++)
    {
      if(datas[i].bankname==amtbal)
      {
        alert("YOUR ACCOUNT BALANCE IS Rs."+datas[i].balance);
         back();
      }
    }
  }
  else{
    alert("INVALID TPIN");
  }}
  
function accounts()
{
    datas=JSON.parse(sessionStorage.getItem('data'));
  Fid.innerHTML='<h3 style="text-align:center">LINKED ACCOUNTS AND DETAILS</h3>'
  for(let i=0;i<datas.length;i++)
  {
     Fid.innerHTML+='<h5>BANK NAME :</H5>'+datas[i].bankname+'<br>'+
     '<H5>IFSC CODE :</H5>'+datas[i].ifsccode+'<br>'+'<H5>ACC NO :</H5>'+datas[i].accno+'<br>'+
      '<H5>BALANCE :</H5>'+datas[i].balance+'<br><br>'
  }
 }
function displayAcc()
{
    Fid.innerHTML ='<h2 style="text-align:center;">Account Details</h2>'+
    '<br>'+
    '<h5 style="text-align:center;">Bank Name :</h5>'+
    '<br>'+
    '<h5 style="text-align:center;">IFSC :</h5>'+
    '<br>'+
    '<h5 style="text-align:center;">A/C Number :</h5>'+
    '<br>'+
    '<h5 style="text-align:center;">Re-A/C Number :</h5>'+
    '<br>'+
    '<h5 style="text-align:center;">Account :</h5>'+
    '<br>'+
    '<div class="text-center"><button type="button" class="btn btn-success" onclick="resetTpin()">Reset Pin</button></div>'
}
function resetTpin()
{
    Fid.innerHTML ='<h2 style="text-align:center;">Reset Transaction Pin</h2>'+
    '<br>'+
    '<h5 style="text-align:center;">Old Pin</h5><input type="number" class="form-control">'+
    '<br>'+ 
    '<h5 style="text-align:center;">New Pin</h5><input type="number" class="form-control">'+
    '<br>'+
    '<div class="text-center"><button type="button" class="btn btn-success">Change Pin</button></div>'
}
function acDetails()
{
    Fid.innerHTML ='<h2 style="text-align:center;">A/C Details</h2>'+
    '<br>'+
    '<h5 style="text-align:center;">Bank Name</h5><input type="text" id="banknames" class="form-control">'+
    '<br>'+
    '<h5 style="text-align:center;">IFSC</h5><input type="text" id="ifsccodes" class="form-control">'+
    '<br>'+
    '<h5 style="text-align:center;">A/C Number</h5><input type="text" id="accnos" class="form-control">'+
    '<br>'+
    '<h5 style="text-align:center;">Re-enter Acc No :</h5><input type="text" id="reacc" class="form-control"></input><h5 style="text-align:center;">Balance :</h5><input id="balances" type="text" class="form-control">'+'<br>'+
    '<div class="text-center"><button type="button" class="btn btn-success" onclick="otpverify()">Link</button></div>'
}
function otpverify()
{
    let bankname=document.getElementById('banknames').value;
    let ifsccode=document.getElementById('ifsccodes').value;
    let accno=document.getElementById('accnos').value;
    let balance=document.getElementById('balances').value;
    if(accno==document.getElementById('reacc').value)
    {
        let obj={
            'bankname':bankname,
            'ifsccode':ifsccode,
            'accno':accno,
            'balance':balance,
           };
           let existingData = JSON.parse(sessionStorage.getItem('data')) || [];
          existingData.push(obj);
          sessionStorage.setItem('data', JSON.stringify(existingData));



    Fid.innerHTML ='<h2 style="text-align:center;">OTP Verification</h2>'+
    '<br>'+
    '<h5 style="text-align:center;">OTP</h5><input type="number" id="otp2" class="form-control">'+
    '<br>'+
    '<div class="text-center"><button type="button" class="btn btn-success" onclick="SetTpin1()">Verify</button></div>'
    c=Math.floor(Math.random()*10000);
    alert("Your OTP is "+c);
   }
   else{
    alert("CHECK THE ACCOUNT NUMBER");
   }
}
function SetTpin1()
{

  let e=document.getElementById('otp2').value;
  if(c==e){
    Fid.innerHTML ='<h2 style="text-align:center;">Set Transaction PIN</h2>'+
    '<br>'+
    '<h5 style="text-align:center;">Set Pin</h5>'+
    '<input type="number" id="transferpin" class="form-control">'+
    '<br>'+
    '<div class="text-center"><button type="button" class="btn btn-success" onclick="tpinverify()">Submit</button></div>'
}
else{
    alert("INVALID OTP");
}
}
function tpinverify()
{
    let tpins=document.getElementById('transferpin').value;
    sessionStorage.setItem('tpin',tpins);
    alert("T-PIN CREATED");
    Fid.innerHTML ='<h2 style="text-align:center">Menu</h2>'+'<br><br>'+
    '<h5><a href="#" onclick="displaydetails()" style="text-decoration: none;">PROFILE </a></h5>'+
    '<br>'+
    '<h5><a href="#" onclick="transaction()" style="text-decoration: none;">TRANSACTIONS </a></h5>'+
    '<br>'+
    '<h5><a href="#" onclick="CheckBal()" style="text-decoration: none;">CHECK BALANCE </a></h5>'+
    '<br>'+
    '<h5><a href="#" onclick="accounts()" style="text-decoration: none;">ACCOUNTS </a></h5>'+
    '<br>'+
    '<h5><a href="#" onclick="acDetails()" style="text-decoration: none;">LINK A/C </a></h5>'+
    '<br>'   
}