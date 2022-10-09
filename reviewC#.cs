//
while(){}

switch(expression){
    case val1:
    case val2:
    default:
}

foreach( var item in collection){}




public class DemoParamPass{
    public void PassByValue(int a, string b){
        Console.WriteLine($"value passed: a={a}, b={b}");
    }

    public void PassByRef(ref int a, ref string b){ }


    public void PassWithDefault(double r, double pi=3.14){ 
        Console.WriteLine($"the area is {pi*r*r}")
    }


    public bool CheckAuthent(string uname, string password, out string msg){
        msg=""
        if (uname=="wen" && password=="pa"){
            msg="ok";
            return true;
        } else if(password !="pa" || uname != "wen"){
            msg="not ok";
            return false;
        } 
    }

    [Obsolete]// when call, will note
    [Obsolete(" notice "), true]
    public int AddNumber(params int[] arr){
        int length = arr.Length;
        int sum=0;
        for(int i=0; i<length; i++){
            sum+=arr[i];
        }
        return sum;
    }
}

public enum DaysOfWeek{
    SunDay,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

DaysOfWeek today = DaysOfWeek.Thursday;
Console.WriteLine(today);

//data type
int a = 10;
long aa = 120;
float b = 1.234f;
double c = 2.345;
char d='d';
string s = "hello";
StringBuilder sb = new StringBuilder("hello123");   
decimal e = 3.14m;
bool z = true;

//property
public class DemoProperty{
    private string name;     //full verison
    public string Name{
        get{return name;}
        set{name=value;}  //private set{name=value;}
    }

    public string Name {get; set;}  //prop tab
    public int Id {get; set;}
    public string Email {get; set;}
    

    public DemoProperty(int id, string name){  //ctor tab
        Name=name;
        Id = id;
    }

    public DemoProperty(int id, string name, string email){  //constructuor overloadding
        Name=name;
        Id = id;
        Email = email;
    }

}

//abstract class
public abstract class Employee{
    public int Id {get; set;}
    public string Position {get; set;}

    public Employee(){} //optional constructor

    public abstract void Task(){}
    public virtual void Pay(){
        Console.WriteLine("It is ...")
    }

}

public class FullTimeEmployee: Employee{
    public decimal BiweekPay{get; set;};
    public FullTimeEmployee(){}

    public override void Task(){
        Console.WriteLine("today I did...")
    }
    public override void Pay(){
        Console.WriteLine("It is hard to make money")
    }

}

public sealed PartTimeEmployee: Employee{
    public decimal HourlyPay{get; set;}
    public override void Task(){
        Console.WriteLine("today I did 8 hours")
    }

}

public class Manager: FullTimeEmployee{
    public decimal ExtraBonus{get; set;}
    public void AttendMeet(){
        Console.WriteLine("two meeting")
    }
}

//overloading
public static class OverloadingDemo{
    public static int AddNum(int a, int b){
        return a+b;
    }
    public static double AddNum(double a, double b){
        return a+b;
    }
    public static int AddNum(int a, int b, int c){
        return a+b+c;
    }
}


//Extension Demo
public static class ExtensionDemo{
    public static string EvenOrOdd(this int num){
        if (num % 2==0){
            return "Even";
        } else{
            return "Odd";
        }

    }
}


//Exception handle
   //build in exception
public class ExceptionDemo{
    public int Divide(int num, int divisor){
        return num/divisor;
    }

    public int Calculate(int num1, int num2, string operator){
        if(operator=="/"){
            return Divide(num1, num2);
        } else{
            throw new ArgumentOutOfRangeException();
        }
    }
}


    //customed exception
public class NumberException: Exception{
    public override string Message{
        get { return "Number can not be negtive"};
    }

}

try{
    int num1=Convert.ToInt32(Console.ReadLine());
    int num2=Convert.ToInt32(Console.ReadLine());
    if(num1<0 || num2<0){
        throw new NumberException();
    }
    string op = Console.ReadLine();
    ExceptionDemo demo = new ExceptionDemo();
    Console.WrinteLine(demo.Calculate(num1, num2, op));
}
catch(DivideByZeroException ex){
    Console.WrinteLine(ex.Message);
}
catch(ArgumentOutOfRangeException ex){
    Console.WrinteLine(ex.Message);
}
catch(NumberException ex){
    Console.WrinteLine(ex.Message);
}
finally{
    Console.WrinteLine("clear unmanaged resouce");
}

//Generics
public class GenericsDemo<T> where T: struct {
    public T AddNum(T num1, T num2){
        return num1+num2
    }

    public bool AreEqual(T a, T b){
        retuen a.Equals(b);
    }

}

public interface IRepository<T> where T: class {
    public bool Insert(T obj){}
    public bool Update(T obj){}
    public bool Delete (T obj){}
    public List<T> GetAll(){}
    public T GetById(int id){}
}

public class ProductRepository: IRepository{
    //implement all methords in IRepository.
    //throw new NotImplementedException();
}


//delegate
  //pre-defined delegate
public class DelegateDemo{
    public void ActionDemo(){
        Action<int> fib = length =>{
            int a=0, b=1, c=0;
            for(int i; i<length; i++){
                c=a+b;
                a=b;
                b=c;
            }
        }
    }

    public void PredictDemo(){
        Predict<int, bool> fib = length =>{
            int a=0, b=1, c=0;
            if (length<3){
                return false;
            }
            for(int i; i<length; i++){
                c=a+b;
                a=b;
                b=c;
            }
            return true;
        }
    }

    public void FuncDemo(){
        Func<int, int> fib = length =>{
            int a=0, b=1, c=0;
            for(int i; i<length; i++){
                c=a+b;
                a=b;
                b=c;
            }
            return c;
        }
    }

    public void Demo(){
        delegate(string name){}
    }


}

//self-defined delegate

//LinQ
Var result = _dbContext.AnyTable.Select(e=>e);
Var result = _dbContext.AnyTable.Select(e=>e.FullName);
Var result = _dbContext.AnyTable.Select(e=>new{
    Id = e.Id,
    FullName = e.FullName,
    DepartMent = e.Department
});

var result = _dbContext.AnyTable.Select(x=>x.Department).Distinct();
Var result = _dbContext.AnyTable.Select(e=>new{
    Id = e.Id,
    FullName = e.FullName,
    DepartMent = e.Department
}).FirstOrDefault(x => x.Department == "IT")?? new{Id=-1, FullName="N/A", Department="N/A"};
//.First()
//.SingleOrDefault()

var result = _dbContext.AnyTable.OrderByDecending(x => x.Salary).ThenByDescending(x=> x.FullName);
var result = _dbContext.AnyTable.GroupBy(x=>x.Department);
var result = _dbContext.AnyTable.Where(x=>x.Salary>7000 && x.Department=="IT").Select(x=>x.FullName);
var result = _dbContext.AnyTable.GroupBy(x=>x.Department).Select(x=> new{
    TotalSalary = x.Sum(x=> x.Salary),
    AvgSalary = Math.Round(x.Avg(x=>x.Salary))
})

var result = _dbContext.AnyTable.Any(x=>x.Salary>10000);
var result = _dbContext.AnyTable.All(x=>x.Salary>10000);

var result = _dbContext.Table1.Where(x=>x.Salary>5000)
            .Include(x=>x.Table2)  //must in navagation property
            .Include(x=>x.Table3).ThenInclude(x=>x.Table3_1)
            .OrderByDescending(x=>x.FullName)
            .Skip(20)
            .Take(10)
            .ToList()

_dbContext.Set<T>().Remove(entity);
_dbContext.SaveChangesAsync();
_dbContext.Entry(entity).State = EntityState.Modified;

//Dapper



//
public class Car{
    public string Brand {get; set;}
    public int Id {get; set}
}

public class Example{
    public static void Main(){
        //List
        List<T> cars= new List(T);
        cars.Add(new Car() {Brand="Benz", Id=1});
        cars.Add(new Car() {Brand="BMW", ID=3});

        List<string> names = new List<string>();

        names.Contains(T);
        names.Count();  
        names.Clear();
        names.Remove(T);
        names.RemoveAt(int idx);
        names.Insert(int idx, T);
        names.ToArray();
        names.ToString();
        names.IndexOf(T);
        names.LastIndexOf();  
        names.Reverse();
        names.Sort(delegate(Car a, Car b){
            if(a.Brand==null && b.Brand==null) return 0;
            else if (a.Brand==null) return -1;
            else if (b.Brand==null) return 1;
            else return a.Brand.CompareTo(b.Brand);
        })

        foreach(string name in names){}
        foreach (var elem in my_stack)

        string n = names[5];

        //Stack
        Stack my_stack = new Stack()
        my_stack.Push("num1")
        my_stack.Pop()
        my_stack.Peek()
        my_stack.clear()
        my_stack.Contains("numx")

        //Dictionary
        Ditionary<int, string> doors = new Dictionary<int, string>();
        doors.Add(1,"Wen");
        doors.Add(2,"Jian");
        doors[1]="Max"; //change value

        doors.Clear();
        doors.ContainsKey(3);
        doors.ContainsValue("Max");
        doors.Remove(Tkey);
        doors.Count();
        foreach(KeyValuePair<int, string> kvp in doors){
            Console.WriteLine(kvp.Key,  kvp.Value);
        }
        
         Ditionary<int, string>.KeyCollection keyColl = doors.Keys;
         Ditionary<int, string>.ValueCollection valueColl = doors.Keys;
         foreach(int k in keyColl){
            Console.WriteLine("key is", k);
         }

    }
}


//ASP.NET CORE
// Kestrel web server
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();
app.Run();

//string builder
StringBuilder sb = new StringBuilder("ABC", 50);
sb.Remove(int startIndex, int length)
sb.Append(string/StringBuilder/char)
sb.Insert(idx, anytype)
sb.Clear()
sb.CopyTo(int sourceIndex, char[] destination, int destinationIndex, int count)
sb.Equals(sb1)
sb.Length()
sb.ToString()

 Object obj = 0; // boxing