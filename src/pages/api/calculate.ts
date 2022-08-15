import { NextApiRequest, NextApiResponse } from 'next';

import { MortgageCalculator } from '../../lib/calculator';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { term, loanAmount, interestRate, downPayment } = req.body;
  const calculator = new MortgageCalculator(
    loanAmount,
    interestRate,
    term,
    downPayment
  );

  res.json({
    monthlyPayment: calculator.calculateMonthlyPayment(),
  });
};

export default handler;
