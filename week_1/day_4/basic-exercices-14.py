def country_info(country = "Naboo"):

    if country == "United States":
        print(" The capital is: Washington DC")
    elif country == "Brazil":
        print(" The capital is: Brasilia")
    elif country == "France":
        print(" The capital is: Paris")
    elif country == "Italy":
        print(" The capital is: Rome")
    elif country == "Naboo":
        print(" The capital is: Theed")

country_info()

def country_info(country = "Naboo"):

    if country == "United States":
        capital ="Washington DC"
    elif country == "Brazil":
        capital = "Brasilia"
    elif country == "France":
        capital = "Paris"
    elif country == "Naboo":
        capital ="Theed"
    return capital

print(country_info("Brazil"))

people = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]
short_people = filter(lambda p: len(p) <= 4, people)
hello_people = map(lambda p: f"Hello {p}", short_people)
print(list(hello_people))
