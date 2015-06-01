def palindrome?(sentence)
  sentence=sentence.downcase.gsub(" ","")
  head=0
  tail=sentence.length-1
  while head<tail do
    if(sentence[head]!=sentence[tail])
      return false
    end
    head=head+1
    tail=tail-1
  end
   
    return true
end