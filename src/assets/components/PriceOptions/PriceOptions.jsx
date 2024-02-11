import PriceOption from "./PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      features: [
        "Access to gym facilities",
        "Basic workout equipment",
        "Locker room access",
        "Fitness assessment",
        "Discounts on merchandise",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: 49.99,
      features: [
        "Access to gym facilities",
        "Full range of workout equipment",
        "Group fitness classes",
        "Locker room access",
        "Personalized workout plans",
        "Nutritional guidance",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: 79.99,
      features: [
        "Access to gym facilities",
        "Full range of workout equipment",
        "Group fitness classes",
        "Personal trainer sessions",
        "Sauna and spa access",
        "Locker room access",
        "Exclusive member events",
        "Towel service",
      ],
    },
    {
      id: 4,
      name: "Student Membership",
      price: 24.99,
      features: [
        "Access to gym facilities",
        "Basic workout equipment",
        "Student discount",
        "Locker room access",
      ],
    },
    {
      id: 5,
      name: "Family Membership",
      price: 99.99,
      features: [
        "Access to gym facilities",
        "Full range of workout equipment",
        "Group fitness classes",
        "Family discounts",
        "Locker room access",
      ],
    },
    {
      id: 6,
      name: "Corporate Membership",
      price: 69.99,
      features: [
        "Access to gym facilities",
        "Full range of workout equipment",
        "Corporate discounts",
        "Locker room access",
        "Dedicated corporate fitness classes",
      ],
    },
    {
      id: 7,
      name: "Senior Membership",
      price: 39.99,
      features: [
        "Access to gym facilities",
        "Full range of workout equipment",
        "Senior discount",
        "Locker room access",
        "Senior-focused fitness classes",
      ],
    },
    {
      id: 8,
      name: "Couples Membership",
      price: 59.99,
      features: [
        "Access to gym facilities",
        "Full range of workout equipment",
        "Group fitness classes",
        "Couples discounts",
        "Locker room access",
      ],
    },
    {
      id: 9,
      name: "Premium Plus Membership",
      price: 99.99,
      features: [
        "Access to gym facilities",
        "Full range of workout equipment",
        "Group fitness classes",
        "Personal trainer sessions",
        "Sauna and spa access",
        "Locker room access",
        "Exclusive member events",
        "Towel service",
        "Unlimited guest passes",
      ],
    },
    {
      id: 10,
      name: "Weekend Warrior Membership",
      price: 39.99,
      features: [
        "Access to gym facilities on weekends",
        "Basic workout equipment",
        "Weekend fitness classes",
        "Locker room access",
      ],
    },
  ];
  console.log(priceOptions);

  return (
    <div className="my-10 ml-10">
      <h3 className="text-4xl font-extralight">Price Options</h3>
      <div className="grid md:grid-cols-3 text-left gap-8 p-10">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
