import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
          <Link to="/" className="flex items-center gap-3 group">
            <Icon name="CircleDot" className="h-10 w-10 text-primary transition-transform group-hover:scale-110" />
            <h1 className="text-2xl md:text-3xl font-extrabold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Padel club
            </h1>
          </Link>
          
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="relative w-12 h-12 hover:bg-primary/10"
              >
                <div className="flex flex-col gap-1.5 w-6">
                  <span className={`h-0.5 w-full bg-primary transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`h-0.5 w-full bg-primary transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`h-0.5 w-full bg-primary transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-xl border-l border-primary/20 flex flex-col"
            >
              <SheetHeader className="text-left">
                <SheetTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Меню
                </SheetTitle>
                <SheetDescription className="text-muted-foreground">
                  Навигация по сайту
                </SheetDescription>
              </SheetHeader>
              
              <nav className="mt-8 space-y-2 flex-1 overflow-y-auto pb-4">
                {menuItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.link}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center gap-4 p-4 rounded-lg hover:bg-primary/10 transition-all hover:scale-[1.02] border border-transparent hover:border-primary/20"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                      <Icon name={item.icon as any} className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <Icon name="ChevronRight" className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </nav>
              
              <div className="pt-4 pb-6 px-6 border-t border-primary/20 -mx-6">
                <Button 
                  asChild 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  <Link to="/courts" onClick={() => setIsMenuOpen(false)}>
                    <Icon name="Calendar" className="mr-2 h-5 w-5" />
                    Забронировать корт
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
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
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto mb-6">
              {menuItems.map((item, idx) => (
                <Card 
                  key={idx}
                  className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all hover:scale-105 cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Link to={item.link}>
                    <CardHeader className="text-center p-3">
                      <div className="mx-auto mb-2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <Icon name={item.icon as any} className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-white text-base md:text-lg mb-0.5">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-white/70 text-xs">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                  </Link>
                </Card>
              ))}
            </div>
            
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 text-lg px-12 py-6 shadow-2xl animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              <Link to="/courts">
                <Icon name="Calendar" className="mr-3 h-6 w-6" />
                Забронировать корт
              </Link>
            </Button>
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
              <Icon name="CircleDot" className="h-6 w-6 text-primary" />
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