#Compute the sum of cubes for a given range a through b.
def sum_of_cubes(a, b)
  (a..b).inject(0) do |sum,num|
    sum+num**3
  end
end

puts sum_of_cubes(ARGV[0].to_i,ARGV[1].to_i)