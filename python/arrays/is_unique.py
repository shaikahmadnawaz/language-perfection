def is_unique(s: str) -> bool:
    """
    Check if a string has all unique characters.
    """
    return len(set(s)) == len(s)