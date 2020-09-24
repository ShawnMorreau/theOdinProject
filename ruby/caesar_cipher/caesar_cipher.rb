# @author Shawn Morreau
# @date 24/09/2020

UPPER_MIN_MAX = [65, 90]
LOWER_MIN_MAX = [97, 122]
NUM_LETTERS = 26

def shift_letter(letter, offset, min_max)
  shifted_val = letter.ord + offset
  if (shifted_val > min_max[1])
    return (min_max[0] + (shifted_val - min_max[1]) - 1).chr
  elsif (shifted_val < min_max[0])
    return (min_max[1] - (min_max[0] - shifted_val) + 1).chr
  else
    return shifted_val.chr
  end
  return letter
end

def caesar_cipher(string, offset)
  if (string.empty?)
    return string
  end
  string_arr = string.split("")
  if offset > NUM_LETTERS
    offset %= NUM_LETTERS
  elsif offset < -NUM_LETTERS
    offset %= -NUM_LETTERS
  end

  string_arr.map! do |letter|
    if (!letter.match? (/[A-Za-z]/))
      letter
    elsif (/[[:upper:]]/.match(letter))
      shift_letter(letter, offset, UPPER_MIN_MAX)
    else
      shift_letter(letter, offset, LOWER_MIN_MAX)
    end
  end
  string_arr.join("")
end

puts caesar_cipher(" a~1 232 14`23`", 2)
puts caesar_cipher("What a String!", 31)
puts caesar_cipher("What a String!", 5)
puts caesar_cipher("abcdefg", -27)
puts caesar_cipher("abcdefg", -1)
