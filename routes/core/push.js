/**
 * google FCM
 * Created by youp on 2018/3/16.
 */
var admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.cert({
        projectId: 'fir-92ad4',
        clientEmail: 'firebase-adminsdk-0py2q@fir-92ad4.iam.gserviceaccount.com',
        privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDkO4A30YBEkfDX\n6iesRzcG94vJwQr8DopngX5cSzCaZubItfZHHgS3rkPdneI4j8uQ9jcT0di8Jevb\nbB39HZN7h6IrPyRB7l2rC3Hj2iLHR/ij+pKKUrGAUNY6N/tps2n0o5+JtEzEqz9d\nT3i/1Fazmx1/xy6Grf1/VEOOuL//3sjwt2I0gRia21tIwQ+c/2o+55xt4p27hV9P\nS0Ik5Ft1dHcbPVT3ib2in+nfqcIkVYZHjpo64AON0XU3zmJK6J84j9SlkI7m7Ssv\nIhZzpmaoRZa2R8HmljftI1UuVrIDxAnwaOGD+5+XK+fqEqDxeYmDz2Cnjt+5u03d\nSNPV8NMtAgMBAAECggEABHlmUjehJfb7AWiX3j0NhxBNAkqReg870unoYKjnDhCP\niwaSLUXqyarbxUfalMlfamPeXeixMOMOswjSP650+kvWiUHd8juqcw68VbOVLlJN\nvX01/8SmPYeYKVrV3zwDCyaTpvNkIydrXf5Vb/t3zmI1T8q7yOaUNAsLKl33pT7w\nZlJNgxhPENk6R1G4S3/DkcZN+gNTbnLZponOaVlbZkBccxZXlUiDRC4Va2jncrZp\n8GoN6l6uMC2Yf8gOjciC3lJiQRHimS0Bu4nOyUcLOi1skU/UTISv3sAD1N1NU4Su\nm8IMmB+QqrbS4kJo1y13ecNLhrA5c+g7PvJEx5cniwKBgQD0qb73BlngtQ5D+SUd\nOwHRadC2f8OhC4+mUrM89A+Zw5piSPVpLeJtjqcuVIyTWAsfZ8j0qLr2JttvVkaO\nZr+Zrb8AioaumHVlyWrEfxZVLfqqMRupFneZxn3kJCa2BA/XbqThgyw9x2TYFa8t\nhpZ9gcHmRO57/UhUIJIWSsinZwKBgQDuztm64qcAKjbxlCLB9wg+XKw36l2OR80N\n7bsJPpuaE0gtE+DFhgOMxIi/l9/ZWQxGoPP7E4i0nbffsYHtl054SL98sgLsS4oh\nSocP+/gY/L1ZJliwuPRJ8PE01Xdl6/CHYAqqg8M99lFMrVIosmd8bw5DRqBTQxw0\nb/FQK6T4SwKBgC5c2E4xSujVBn4FAW53lxGa7q0WqviimzcWZta/HRGzSlcjojWr\nN0QxiyaxaO4m+fyaiy8ppjwtAtonTDmB6P7zOMWeeoUtaNnAAFZ6Cr5bdyu3IJm7\nIzDlt0d7PkaxoFrfoakGVWTjmw2Dlm2XGn9wDlFXcKXYSlN+1JAa3ckzAoGBAKEH\nmooKi9HwpVwBJ+7jRQvIMdkCkFOA1yStSZHSRdp/Zgv/e3G2DG6/l/aZ0rgc88os\nflivs18XewW8DIDJpoA1jennn1D3Hw2T079TiNhQlN2oneWM0i2J6xxVVU3E60xd\n1tNkRiNiFTA/L0eCBYZC3LtAxJtghYRWd8I3q+ZBAoGBAMsR3CNYB5/baSQT3P33\naxia6qTguXWvjhoK+pE1gep8kE8hzSdSX9I7UV61mrRInCy/j5c6UKFUiHVAb9kZ\nsacZ2SfVLEjwDZaQLAODHvJ1uLdSA0qfFoPCeYGwtHLeAs+TNPpuO7s4pqYC8xID\npOXhTA3antpXepimGLRBjlgA\n-----END PRIVATE KEY-----\n'
    }),
    databaseURL: 'https://fir-92ad4.firebaseio.com'
});
push = function(){};
push.sendMessage = function(registrationTokens,title,body,callback){
    var payload = {
        notification: {
            title: title,
            body: body
        }
    };
    admin.messaging().sendToDevice(registrationTokens, payload)
        .then(function(response) {
            callback(response);
        })
        .catch(function(error) {
            console.log("Error sending message:", error);
        });

}
