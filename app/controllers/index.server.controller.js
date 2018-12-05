exports.Aboutrender = 
       function(req, res, next)
        {  
               res.render('about', {  
                title: 'About Praveen',
                userFullName: req.user ? req.user.fullName : ''  });
            };
     
exports.PageUnderRender = 
            function(req, res, next)
             {  
                    res.render('undercontruction', {  
                     title: 'Praveen Nishad',
                     userFullName: req.user ? req.user.fullName : ''  });
                 };

exports.render = function(req, res) {
    res.render('index', {
        title: 'Praveen Nishad',
        userFullName: req.user ? req.user.fullName : ''  });
       };

