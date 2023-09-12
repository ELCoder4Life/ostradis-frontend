import Button from "./button";

export default function PricingCard({ tier }) {
  return (
    <>
      <div className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-white dark:bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
        <h2 className="text-lg sm:text-xl font-medium text-gray-700 dark:text-white mb-2">
          {tier.title}
        </h2>
        <p className="text-lg sm:text-xl text-center mb-8 mt-4">
          <span className="text-3xl sm:text-4xl font-bold text-gray-700 dark:text-white">
            {tier.price}
          </span>{" "}
          / Month
        </p>
        <ul className="list-none list-inside mb-6 text-center">
          {tier.features.map((feature, index) => (
            <li
              key={index}
              className={index === 0 ? "font-bold text-primary" : ""}
            >
              {feature}
            </li>
          ))}
        </ul>
        <Button link={tier.buyLink} text="Purchase Plan" type="primary" />
      </div>
    </>
  );
}
