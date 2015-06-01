#Given a sentence containing multiple words, find the frequency of a given word in that sentence.
def find_frequency(sentence, word)
  num=0
  arr=sentence.downcase.split(" ")
  arr.each do |i|
    if i==word
      num=num+1
    end
  end
  num
end