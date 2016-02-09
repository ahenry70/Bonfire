describe('factorialize', function(){
  it('Entered 1 -- Should Return 1', function(){
    expect(factorialize(1)).toEqual(1);}
  );

  it('Entered 2 -- Should Return 2', function(){
    expect(factorialize(2)).toEqual(2);}
  );

  it('Entered 3 -- Should Return 6', function(){
    expect(factorialize(3)).toEqual(6);}
  );

  it('Entered 4 -- Should Return 24', function(){
    expect(factorialize(4)).toEqual(24);}
  );

  it('Entered 5 -- Should Return 120', function(){
    expect(factorialize(5)).toEqual(120);}
  );

});
