# _Dr. Sillystringz Factory_

#### By _**Ella Tanttu**_

#### _An mvc application that allows the user to facilitate Machine and Engineer relations._

## Technologies Used

* _HTML_
* _C#_
* _CSS_
* _Markdown_
* _Bootstrap_
* _HtmlHelper_
* _SQL_
* _MySQL_
* _EntityFrameworkCore_

## Description

<Insert relationship visual here>
_TBD_

## Setup/Installation Requirements

* _You can find the github repository [here](https://github.com/ellajtanttu/Sillystringz.Solution)_
* _Click the code button, and copy the https link_
* _In your in git bash or your preferred git terminal navigate to the directory you would like to store the project_
* _Enter: "git clone" followed by the https link_
* _Now that the repository is cloned to your computer, right click on the folder and click open with vs code_
* _Once in the project navigate to the UniversityRegistrar directory_
* _Type dotnet restore to install dependencies_
* _In order to initalize a database you will need to create an appsettings.json file that looks like this_
```
{
  "ConnectionStrings": {
      "DefaultConnection": "Server=localhost;Port=3306;database={YOUR DATABASE NAME HERE};uid={YOUR USER ID HERE};pwd={YOUR PASSWORD HERE};"
  }
}
```
* _Once you have the appsettings.json fie, to create a database run: dotnet ef add initial_
* _To update the database in MySQL run: dotnet ef database update_
* _At this point you will now be able to view the project by typing dotnet run in the terminal_


## Known Bugs

No known issues

## License

_MIT Copyright (c) 2021 Ella Tanttu_
_https://opensource.org/licenses/MIT_

## Contact Information

_Ella Tanttu ellajtanttu@gmail.com_