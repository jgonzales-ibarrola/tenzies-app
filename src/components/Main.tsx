import { nanoid } from "nanoid";
import { useState } from "react";

const Main = () => {
	const [dice, setDice] = useState(() => generateNewDice());

  const gameWon = dice.every(die => die.isHold) &&
                  dice.every(die => die.value === dice[0].value)

	function generateNewDice() {
		return new Array(10).fill(2).map(() => ({
			id: nanoid(),
			value: Math.floor(Math.random() * 10 + 1),
			isHold: false,
		}));
	}

	function rollDice() {
		setDice((oldDice) =>
			oldDice.map((die) =>
				!die.isHold
					? {
              id: nanoid(),
							value: Math.floor(Math.random() * 10 + 1),
							isHold: false,
					  }
					: die
			)
		);
	}

	function onHold(id: string) {
		setDice((oldDice) =>
			oldDice.map((die) => {
				return die.id === id ? { ...die, isHold: !die.isHold } : die;
			})
		);
	}

	const buttonElements = dice.map((die) => {
		const { id, value, isHold } = die;

		return (
			<button
				type="button"
				key={id}
				className={isHold ? "on-hold" : undefined}
				onClick={() => onHold(id)}
			>
				{value}
			</button>
		);
	});

	return (
		<main
			className="container m-auto flex items-center justify-center"
			style={{ height: "calc(100vh - 64px)" }}
		>
			<div className="card mx-4 p-4 border">
				<div className="card-header text-center space-y-3 mb-8">
					<h1 className="font-bold text-[25.6px] text-karla">
						Tenzies
					</h1>
					<p className="text-[13.11px] text-inter">
						Roll until all dice are the same. Click each die to
						freeze it at its current value between rolls.
					</p>
				</div>

				<div className="card-content grid grid-cols-5 gap-4">
					{buttonElements}
				</div>

				<button
					type="button"
					onClick={rollDice}
					className="block bg-[#5035FF] text-white px-10 mt-6 m-auto"
				>
					Roll
				</button>
			</div>
		</main>
	);
};

export default Main;
