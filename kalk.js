
		var newdigit = true;
            	var op;
            	var temp;
            	function tombol(nilai)
		{
                	if(newdigit)
			{
                    		newdigit = false;
                	}
			else
			{
				if(nilai == '.' && document.kalkulator.layar.value.indexOf(".") == -1)
				{
					nilai = document.kalkulator.layar.value + nilai;
				}
					else if (nilai == '.' && document.kalkulator.layar.value.indexOf(".") != -1)
					return;
			}
			else
			{
				nilai = document.kalkulator.layar.value + nilai;
			}
                }

                document.kalkulator.layar.value=nilai;
		{
           		function Operator(opt)
			{
				op = opt;
				if(opt == 'x^2' || opt == '%' || opt == 'akar' || opt == '1/x' || opt == '+/-') Hitung();
				else
				{
					if(temp)
					{
						Hitung();
					}
					temp = document.kalkulator.layar.value;
					op = opt;
					newdigit=true;
				}
           	 	}
			
			function CE()
			{
        			newdigit = true;
       				document.kalkulator.layar.value='0';
        			temp = 0;
     			}
			
	     		function C()
			{
        			newdigit = true;
        			document.kalkulator.layar.value='0';
				temp = 0;
    			}
			
			function Hapus()
			{
				var str = document.kalkulator.layar.value;
				var res = str.substring(0, str.length - 1);
				document.kalkulator.layar.value=res;
			}

			function Hitung()
			{
        			var angka = document.kalkulator.layar.value;
				var hasil;
				
        			if(op == '*')
				{
          				temp = temp * angka;
        			}
				else if(op == '/')
				{
          				temp = temp / angka;
        			}
				else if(op == '+')
				{
        				  temp = parseFloat(temp) + parseFloat(angka);
        			}
				else if(op == '-')
				{
          				temp = temp - angka;
        			}
				else if(op == '%'){
					temp = angka / 100;
				}
				else if(op == 'x^2'){
					temp = angka * angka;
				}
				else if(op == 'akar'){
					temp = Math.sqrt(angka);
				}
				else if(op == '1/x')
				{
					temp = 1 / angka;
				}
				else if(op == '+/-')
				{
					document.kalkulator.layar.value = -document.kalkulator.layar.value;
					temp = 0;
					return;
				}
				
          			document.kalkulator.layar.value = temp;
				temp = 0;
			}
		}
