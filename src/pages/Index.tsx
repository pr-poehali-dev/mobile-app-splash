import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const menuItems = [
    { icon: 'Target', title: 'Корты', description: 'Профессиональные корты', link: '/courts' },
    { icon: 'Trophy', title: 'Турниры', description: 'Соревнования для всех', link: '/tournaments' },
    { icon: 'BarChart3', title: 'Рейтинги', description: 'Топ игроков клуба', link: '/ratings' },
    { icon: 'Briefcase', title: 'Услуги', description: 'Всё для вашей игры', link: '/services' },
    { icon: 'Info', title: 'О клубе', description: 'Наша история', link: '/about' },
    { icon: 'Mail', title: 'Контакты', description: 'Свяжитесь с нами', link: '/contacts' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Icon name="Trophy" className="h-10 w-10 text-primary" />
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">
                Padel club
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground font-medium">
                Завода имени Ильича
              </p>
            </div>
          </div>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/courts">
              <Icon name="Calendar" className="mr-2 h-4 w-4" />
              Забронировать
            </Link>
          </Button>
        </div>
      </header>

      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/ca50f167-a69a-4d79-9690-bc5c0f5db47f/files/23d9bd5a-0d56-4a86-b462-21da1ca8679f.jpg"
            alt="Padel Court"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center animate-fade-in max-w-5xl">
            <div className="mb-8">
              <h2 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
                Padel club
              </h2>
              <p className="text-2xl md:text-3xl text-white/90 font-bold">
                Завода имени Ильича
              </p>
            </div>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-medium">
              Современный спортивный комплекс с профессиональными кортами
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {menuItems.map((item, idx) => (
                <Card 
                  key={idx}
                  className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all hover:scale-105 cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Link to={item.link}>
                    <CardHeader className="text-center p-4 md:p-6">
                      <div className="mx-auto mb-3 w-14 h-14 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon name={item.icon as any} className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-white text-lg md:text-xl mb-1">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-white/70 text-sm">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Добро пожаловать</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы создали современное пространство для игры в padel. Четыре профессиональных корта, 
              регулярные турниры, система рейтингов и опытные тренеры — всё это ждёт вас 
              в Padel club Завода имени Ильича.
            </p>
          </div>
        </div>
      </section>

      <section className="container px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-none">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Начните играть прямо сейчас</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Забронируйте корт или узнайте больше о наших услугах
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  <Link to="/courts">
                    <Icon name="Calendar" className="mr-2 h-5 w-5" />
                    Забронировать корт
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8">
                  <Link to="/contacts">
                    <Icon name="Phone" className="mr-2 h-5 w-5" />
                    Связаться с нами
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t bg-muted/30 py-8">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Trophy" className="h-6 w-6 text-primary" />
              <span className="font-bold">Padel club Завода имени Ильича</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;