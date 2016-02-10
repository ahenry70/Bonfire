describe('palindrome', function(){
  it('Entered eye -- Should Return true', function(){
    //expect(palindrome("eye")).toEqual(true);}
    expect(palindrome("eye")).toBe(true);}
  );

  it('Entered eyes -- Should Return false', function(){
    //expect(palindrome("eye")).toEqual(true);}
    expect(palindrome("eyes")).toBe(false);}
  );


  it('Entered bb-b -- Should Return true', function(){
    //expect(palindrome("eye")).toEqual(true);}
    expect(palindrome("bb-b")).toBe(true);}
  );

  it('Entered b_b-b -- Should Return true', function(){
    //expect(palindrome("eye")).toEqual(true);}
    expect(palindrome("b_b-b")).toBe(true);}
  );

  it('Entered Bb-b -- Should Return true', function(){
    //expect(palindrome("eye")).toEqual(true);}
    expect(palindrome("Bb-b")).toBe(true);}
  );

  it('Entered race car -- Should Return true', function(){
    //expect(palindrome("eye")).toEqual(true);}
    expect(palindrome("race car")).toBe(true);}
  );


});
