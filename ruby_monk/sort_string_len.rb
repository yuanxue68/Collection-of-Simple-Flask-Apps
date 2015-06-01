#Create a method named 'sort_string' which accepts a 
#String and rearranges all the words in ascending order, by length.
def sort_string(string)
  arr=string.split(" ").sort_by do |seg|
    seg.length
  end
  arr.join(" ")
end