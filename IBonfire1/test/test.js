describe('sumAll', function(){
  it('Should return 3 when 1 and 2 entered', function(){
    expect(sumAll([1, 2])).toEqual(3);}
  );
  it('Should return 6 when 1 and 3 entered', function(){
    expect(sumAll([1, 3])).toEqual(6);}
  );
});
