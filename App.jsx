import React, { useEffect, useState } from "react";

export default function App() {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/PKR")
      .then((res) => res.json())
      .then((data) => {
        setRates(data.rates);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl">
        Fetching live rates...
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">PKR Exchange Rates</h1>

      <table className="table-auto border w-full text-left">
        <thead>
          <tr>
            <th className="border px-4 py-2">Currency</th>
            <th className="border px-4 py-2">Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">USD</td>
            <td className="border px-4 py-2">{rates.USD}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">EUR</td>
            <td className="border px-4 py-2">{rates.EUR}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">GBP</td>
            <td className="border px-4 py-2">{rates.GBP}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}