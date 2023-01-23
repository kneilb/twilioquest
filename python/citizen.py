class Citizen:
    """
    This is a very exciting class that represents a person who lives somewhere.
    """

    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name

    def full_name(self):
        return f"{self.first_name} {self.last_name}"

    greeting = "For the glory of Python!"


# neil = Citizen("Neil", "Burningham")
# print(neil.greeting)
# print(neil.full_name())
