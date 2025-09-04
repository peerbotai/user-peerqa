def hello_world(name="World"):
    """Personalized hello world function"""
    return f"Hello, {name}!"

def main():
    # Test with default greeting
    print(hello_world())
    
    # Test with personalized greeting
    print(hello_world("Alice"))
    print(hello_world("Bob"))

if __name__ == "__main__":
    main()