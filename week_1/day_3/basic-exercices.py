student_info = {'first_name':'Harry',
                'last_name': 'Potter',
                'age':15,
                'address':'Privet Drive, 4',
                'pets':['Hedwig', 'Buckbeak'],
                'best_friends': ('Ron Wealey', 'Hermione Granger'),
                'is_parselmouth': True,
                'houses': {'main': 'Griffyndor', 'second': 'Slytherin'}}

# print Harry's age
print(student_info['age'])
# add 10 years
student_info['age'] += 10
print(student_info['age'])
#change the adress
student_info['address'] = 'Betzalel 8'
print(student_info['address'])
# add a new pet
student_info['pets'].append('Toby')
print(student_info['pets'])
#change the True 
student_info['is_parselmouth'] = False
print(student_info)


for bob in student_info.values():
    print(bob)

#acces the value key of history:
sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}
print(sample_dict["class"]["student"]["marks"]["history"])

