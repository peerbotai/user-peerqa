def fibonacci_recursive(n):
    """Calculate Fibonacci number using recursive method."""
    if n <= 1:
        return n
    return fibonacci_recursive(n-1) + fibonacci_recursive(n-2)

def fibonacci_iterative(n):
    """Calculate Fibonacci number using iterative method."""
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b

def fibonacci_sequence(n):
    """Generate Fibonacci sequence up to n numbers."""
    sequence = []
    for i in range(n):
        sequence.append(fibonacci_iterative(i))
    return sequence

def main():
    # Example usage
    print("Recursive Fibonacci (7th number):", fibonacci_recursive(7))
    print("Iterative Fibonacci (7th number):", fibonacci_iterative(7))
    print("Fibonacci Sequence (10 numbers):", fibonacci_sequence(10))

if __name__ == "__main__":
    main()