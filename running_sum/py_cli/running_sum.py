#!/usr/bin/env python3

"""
Train your memory by adding number to whatever current running sum is.
"""

import random
import time

PRINT_DEBUG = True


def clearscreen():
    """Dumb implementation, replace with actual clear"""
    print('\n'*100)


def main():

    stats = {
        'questions': 0,
        'mistakes': 0,
        'correct': 0,
    }
    DEBUG_RESULTS = []

    upper_bound = int(input("Pick a upper bound for random: "))

    running_sum = 0
    total_start = time.time()

    try:
        while True:
            start = time.time()
            clearscreen()

            stats['questions'] += 1

            random_number = random.randrange(1, upper_bound)
            question = "+ %s = " % random_number
            running_sum += random_number

            try:
                value = int(input(question))
            except (SyntaxError, ValueError):
                value = 0

            while value != running_sum:
                print("WRONG")
                stats['mistakes'] += 1
                try:
                    value = int(input("Try again: "))
                except (SyntaxError, ValueError):
                    continue

            stats['correct'] += 1

            DEBUG_RESULTS.append(
                (running_sum, question, time.time() - start)
            )

    except (KeyboardInterrupt, EOFError):
        pass

    print("\n========")

    if PRINT_DEBUG:
        for r in DEBUG_RESULTS:
            print(r)

    print("\n========")
    print("Sum total: ", running_sum)
    print("Stats: ", stats, "in", time.time() - total_start)


if __name__ == "__main__":
    main()
