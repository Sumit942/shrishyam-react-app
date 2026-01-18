import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";

actor {
  // Data Types
  type Service = {
    title : Text;
    description : Text;
    icon : Text;
  };

  module Service {
    public func compare(service1 : Service, service2 : Service) : Order.Order {
      Text.compare(service1.title, service2.title);
    };
  };

  type Industry = {
    name : Text;
    icon : Text;
  };

  module Industry {
    public func compare(industry1 : Industry, industry2 : Industry) : Order.Order {
      Text.compare(industry1.name, industry2.name);
    };
  };

  type ContactForm = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    serviceInterested : Text;
    timestamp : Int;
  };

  type CompanyInfo = {
    description : Text;
    values : [Text];
    phoneNumbers : [Text];
    email : Text;
  };

  // Persistent Data
  let services = Map.empty<Text, Service>();
  let industries = Map.empty<Text, Industry>();
  let contactForms = Map.empty<Principal, ContactForm>();
  var companyInfo : ?CompanyInfo = ?{
    description = "Shri Shyam Trans Logistics delivers dependable transportation and third-party logistics services designed to keep your supply chain moving—securely, efficiently, and on schedule.";
    values = ["Trust", "Discipline", "Transparency"];
    phoneNumbers = ["8432312949", "9158312949"];
    email = "SSBTS3481@gmail.com";
  };

  // Admin Functions
  public shared ({ caller }) func addService(title : Text, description : Text, icon : Text) : async () {
    let service : Service = {
      title;
      description;
      icon;
    };
    services.add(title, service);
  };

  public shared ({ caller }) func addIndustry(name : Text, icon : Text) : async () {
    let industry : Industry = {
      name;
      icon;
    };
    industries.add(name, industry);
  };

  public shared ({ caller }) func updateCompanyInfo(description : Text, values : [Text], phoneNumbers : [Text], email : Text) : async () {
    let info : CompanyInfo = {
      description;
      values;
      phoneNumbers;
      email;
    };
    companyInfo := ?info;
  };

  // Public Functions
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, message : Text, serviceInterested : Text) : async () {
    let form : ContactForm = {
      name;
      email;
      phone;
      message;
      serviceInterested;
      timestamp = 0;
    };
    contactForms.add(caller, form);
  };

  // Query Functions
  public query ({ caller }) func getServices() : async [Service] {
    services.values().toArray().sort();
  };

  public query ({ caller }) func getIndustries() : async [Industry] {
    industries.values().toArray().sort();
  };

  public query ({ caller }) func getCompanyInfo() : async CompanyInfo {
    switch (companyInfo) {
      case (null) { Runtime.trap("Company info not found") };
      case (?info) { info };
    };
  };
};
