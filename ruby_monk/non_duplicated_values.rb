#Given an Array, return the elements that are present exactly once in the array
def non_duplicated_values(values)
  arr=[]
  values.each do |value|
    if(!(values.count(value)>1))
      arr.push(value)
    end
   end
  arr
end