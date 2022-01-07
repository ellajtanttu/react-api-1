using System; // directive - tells it what code it needs in order to function.
using System.Collections.Generic;

class PhoneBook//class
{
  public static Dictionary<string, string> phoneNumbers = new Dictionary<string, string>();

  static void Main()
  {
    Console.WriteLine("MAIN MENU");
    Console.WriteLine("Would you like to add a person to your phone book? ['Y' for yes, 'Enter' for no]");
    string answer = Console.ReadLine();
    if (answer == "Y" || answer == "y")
    {
      AddContact();
    }
    else
    {
      Console.WriteLine("Would you like to look u[p a number in your phone book? ['Y' for yes, 'Enter' for no]");
      string lookUpAnswer = Console.ReadLine();
      if (lookUpAnswer == "Y" || lookUpAnswer == "y")
      {
        LookUpContact();
      }
      else
      {
        Console.WriteLine("Are you finised with this program? ['y' for yes, 'Enter' for no]");
      string finishedAnswer = Console.ReadLine();
      if (finishedAnswer == "Y" || finishedAnswer == "y")
      {
        Console.WriteLine("Goodbye.");
      }
      else
      {
        Main();
      }
      }
    }
  }

  static void AddContact()
  {
    Console.WriteLine("NEW CONTACT");
    Console.WriteLine("Enter a new contact name");
    string name = Console.ReadLine();
    Console.WriteLine("Enter a new contact phone number");
    string number = Console.ReadLine();
    if (phoneNumbers.ContainsKey(name))
    {
      Console.WriteLine("That person is already in your phonebook. Their number is " + phoneNumbers[name]);
    }
    else
    {
        phoneNumbers.Add(name,Number);
    }
    Main();
  }

  static void LookUpContact()
  {
    Console.WriteLine("CONTACT LOOKUP");
    Console.WriteLine("Whose number would you like to look up?");
    string friend = Console.ReadLine();
    if (phoneNumbers.ContainsKey(friend))
    {
      string value = phoneNumbers[friend];
      Console.WriteLine(friend + "\'s phone number is " + value);
    }
    else
    {
        Console.WriteLine("That person is not in your phonebook.");
    }
    Main();
  }
}

// Add new contacts, including their name, number, address.
// Recall and display that contact information to the user as necessary.

// What we'll need:
// 1. Our standard Main() method will handle interacting with the user in the console.
// 2. An AddContact() method will add a new contact.
// 3. A LookUpContact() method will look up a contact and display their information.