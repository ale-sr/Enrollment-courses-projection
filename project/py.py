with open('ojala.csv') as file:
	mat = [i.split(",") for i in file.read().split("\n")]
	data = [dict(zip(mat[0][1:], i[1:])) for i in mat[1:]]

print(data)