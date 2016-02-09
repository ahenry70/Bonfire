describe('reverseString', function(){
  it('Should return a when a is entered', function(){
    expect(reverseString("a")).toEqual("a");}
  );
  it('Should return b when b is entered', function(){
    expect(reverseString("b")).toEqual("b");}
  );

  it('Should return ba when ab is entered', function(){
    expect(reverseString("ba")).toEqual("ab");}
  );

  it('Should return bca when abc is entered', function(){
    expect(reverseString("cba")).toEqual("abc");}
  );
});
