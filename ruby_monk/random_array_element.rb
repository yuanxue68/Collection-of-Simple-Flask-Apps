#Create a method 'random_select' which, when given an array of elements (array) 
#and a number (n), returns n randomly selected elements from that array.
def random_select(array, n)
  arr=[]
  puts array.length
  n.times do
    arr.push(array[rand(array.length)])
  end
  arr
end
